import { ethers } from 'ethers'
import { Biconomy } from '@biconomy/mexa'
import { Dispatch, FC, SetStateAction } from 'react'
import ConnectWalletButton from './ConnectWalletButton'

const Intro: FC<{ setWeb3: Dispatch<SetStateAction<ethers.providers.Web3Provider>>; setBiconomy: Dispatch<SetStateAction<Biconomy>> }> = ({ setWeb3, setBiconomy }) => (
	<div className="flex flex-col items-center justify-center space-y-8">
		<h1 className="text-5xl md:text-7xl text-center dark:text-white">A digital pet, on the blockchain</h1>
		<p className="max-w-xs md:max-w-prose text-2xl md:text-3xl text-center dark:text-white">
			Adopt and take care of your very own WAGMIpet on the Polygon blockchain!
			<br />
			<br />
			You can feed it, play with it, clean it and make sure it gets enough sleep, getting $LOVE in return.
			<br />
			<br />
			But be careful, if its needs are unmet, it can die!
		</p>
		<ConnectWalletButton className="text-3xl p-4 border-4 border-current text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400" web3={null} setWeb3={setWeb3} setBiconomy={setBiconomy}>
			Connect Wallet
		</ConnectWalletButton>
	</div>
)

export default Intro
