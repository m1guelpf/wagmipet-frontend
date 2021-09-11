import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'
import { Wagmipet__factory as WAGMIpet } from '@/contracts'

export type PetsResponse = { pets: Record<number, string>; error?: string }

export default async function handler({ method, query: { owner } }: NextApiRequest, res: NextApiResponse<PetsResponse>): Promise<void> {
	if (method !== 'GET' || !owner) return res.status(400).json({ pets: [], error: 'Invalid Request.' })

	const web3 = new ethers.providers.InfuraProvider(process.env.NEXT_PUBLIC_NETWORK_ID, process.env.NEXT_PUBLIC_INFURA_ID)
	const contract = WAGMIpet.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, web3)

	const userBalance = await contract.balanceOf(owner as string)

	const pets = Object.fromEntries(
		await Promise.all(
			new Array(userBalance.toNumber()).fill(undefined).map(async (_, index) => {
				const tokenIndex: ethers.BigNumber = await contract.tokenOfOwnerByIndex(owner as string, index)

				return [tokenIndex.toNumber(), await contract.getName(tokenIndex)]
			})
		)
	)

	res.status(200).json({ pets })
}
