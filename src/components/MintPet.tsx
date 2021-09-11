import { Biconomy } from '@biconomy/mexa'
import { KeyedMutator } from 'swr/dist/types'
import { FC, FormEvent, useState } from 'react'
import { Wagmipet__factory as WAGMIpet } from '@/contracts'

const MintPet: FC<{ biconomy: Biconomy; userAddress: string; setPetList: KeyedMutator<Record<number, string>> }> = ({ biconomy, userAddress, setPetList }) => {
	const [name, setName] = useState<string>('')
	const contract = WAGMIpet.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, biconomy.getSignerByAddress(userAddress))

	const adoptPet = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const { data } = await contract.populateTransaction.adopt(name)
		const provider = biconomy.getEthersProvider()

		setPetList(null, false)

		const tx = await provider.send('eth_sendTransaction', [{ data, from: userAddress, to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, signatureType: 'EIP712_SIGN' }])

		provider.once(tx, () => setPetList(null, true))

		window.open(`https://polygonscan.com/tx/${tx}`)
	}

	return (
		<div className="flex flex-col items-center justify-center space-y-8">
			<h1 className="text-5xl md:text-7xl text-center ">Adopt a new $PET</h1>
			<p className="max-w-xs md:max-w-prose text-2xl md:text-3xl text-center">
				Ready to bring home (to your wallet) a smol fren?
				<br />
				<br />
				Just enter an amazing name for your new $PET below, and we'll send it straight to your wallet.
				<br />
				<br />
				Adopting a $PET is completely free and happens on the Polygon blockchain, so transaction fees shouldn't be an issue :)
			</p>
			<form onSubmit={adoptPet} className="flex flex-col w-full max-w-sm">
				<input className="text-3xl py-1 px-4 text-center border-4 border-current text-black" type="text" placeholder="Your awesome new pet" onChange={event => setName((event.target as HTMLInputElement).value)} value={name} required />
				<button type="submit" className="text-3xl p-1 border-4 border-t-0 border-current text-black hover:text-gray-500">
					Adopt
				</button>
			</form>
		</div>
	)
}

export default MintPet
