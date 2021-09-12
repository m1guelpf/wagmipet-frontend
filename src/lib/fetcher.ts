import { BigNumber } from 'ethers'
import { Wagmipet } from '@/contracts'

export const fetchPets = async (contract: Wagmipet, userAddress: string): Promise<Record<number, string>> => {
	const userBalance = await contract.balanceOf(userAddress)

	return Object.fromEntries(
		await Promise.all(
			[...Array(userBalance.toNumber())].map(async (_, index) => {
				const tokenIndex: BigNumber = await contract.tokenOfOwnerByIndex(userAddress, index)

				return [tokenIndex.toNumber(), await contract.getName(tokenIndex)]
			})
		)
	)
}
