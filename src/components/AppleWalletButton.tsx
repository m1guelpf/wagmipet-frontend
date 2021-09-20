import { ethers } from 'ethers'
import { Magic } from 'magic-sdk'
import { Biconomy } from '@biconomy/mexa'
import { OAuthExtension } from '@magic-ext/oauth'
import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction, useEffect, useMemo } from 'react'

const AppleWalletButton: FC<{ web3: ethers.providers.Web3Provider; setWeb3: Dispatch<SetStateAction<ethers.providers.Web3Provider>>; setBiconomy: Dispatch<SetStateAction<Biconomy>>; onClick?: CallableFunction } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ web3, setWeb3, setBiconomy, onClick = () => null, ...props }) => {
	const magic = useMemo<Magic>(() => {
		if (typeof window === 'undefined') return

		return new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY, { extensions: [new OAuthExtension()] })
	}, [])

	const connectWallet = async () => {
		const isLoggedIn = await magic.user.isLoggedIn()

		if (!isLoggedIn) return (magic.oauth as OAuthExtension).loginWithRedirect({ provider: 'apple', redirectURI: window.location.href })

		const web3 = new ethers.providers.Web3Provider(magic.rpcProvider)
		setWeb3(web3)

		const biconomy = new Biconomy(new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`), { apiKey: process.env.NEXT_PUBLIC_BICONOMY_KEY, walletProvider: web3.provider })

		await new Promise((resolve, reject) => biconomy.onEvent(biconomy.READY, resolve).onEvent(biconomy.ERROR, reject))

		setBiconomy(biconomy)
	}

	const disconnectWallet = async () => {
		await magic.user.logout()

		setWeb3(null)
	}

	useEffect(() => {
		magic.user.isLoggedIn().then(auth => {
			if (!auth) return

			connectWallet()
		})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const uriParams = new URLSearchParams(window.location.search)

		if (uriParams.get('provider') !== 'apple') return
		;(magic.oauth as OAuthExtension).getRedirectResult().catch(error => console.log({ error }))
	})

	const onClickConnect = async event => {
		await connectWallet()

		onClick(event)
	}

	return <button onClick={web3 ? disconnectWallet : onClickConnect} {...props} />
}

export default AppleWalletButton
