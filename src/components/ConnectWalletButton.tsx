import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { Biconomy } from '@biconomy/mexa'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction, useEffect, useMemo } from 'react'

const ConnectWalletButton: FC<{ web3: ethers.providers.Web3Provider; setWeb3: Dispatch<SetStateAction<ethers.providers.Web3Provider>>; setBiconomy: Dispatch<SetStateAction<Biconomy>>; onClick?: CallableFunction } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ web3, setWeb3, setBiconomy, onClick = () => null, ...props }) => {
	const web3Modal = useMemo<Web3Modal | null>(() => {
		if (typeof window == 'undefined') return null

		return new Web3Modal({
			network: process.env.NEXT_PUBLIC_NETWORK_ID,
			cacheProvider: true,
			providerOptions: {
				walletconnect: {
					display: {
						description: 'Use Rainbow & other popular wallets',
					},
					package: WalletConnectProvider,
					options: {
						infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
					},
				},
			},
		})
	}, [])

	const connectWallet = () =>
		web3Modal
			.connect()
			.then(provider => new ethers.providers.Web3Provider(provider))
			.then(async web3 => {
				setWeb3(web3)

				const biconomy = new Biconomy(new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`), { apiKey: process.env.NEXT_PUBLIC_BICONOMY_KEY, walletProvider: web3.provider })

				await new Promise((resolve, reject) => biconomy.onEvent(biconomy.READY, resolve).onEvent(biconomy.ERROR, reject))

				setBiconomy(biconomy)
			})

	const disconnectWallet = () => {
		web3Modal.clearCachedProvider()

		setWeb3(null)
	}

	useEffect(() => {
		if (!web3Modal.cachedProvider) return

		connectWallet()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onClickConnect = async event => {
		await connectWallet()

		onClick(event)
	}

	return <button onClick={web3 ? disconnectWallet : onClickConnect} {...props} />
}

export default ConnectWalletButton
