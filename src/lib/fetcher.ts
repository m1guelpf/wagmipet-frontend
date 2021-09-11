import { BigNumber } from 'ethers'
import { Wagmipet } from '@/contracts'

export const fetchPets = async (contract: Wagmipet, userAddress: string): Promise<Record<number, string>> => {
	console.log('getting balance for ', userAddress)
	const userBalance = await contract.balanceOf(userAddress)
	console.log('got balance for ', userAddress)

	return Object.fromEntries(
		await Promise.all(
			new Array(userBalance.toNumber()).fill(undefined).map(async (_, index) => {
				console.log('getting token ', index)
				const tokenIndex: BigNumber = await contract.tokenOfOwnerByIndex(userAddress, index)
				console.log('got token ', index)

				return [tokenIndex.toNumber(), await contract.getName(tokenIndex)]
			})
		)
	)
}
