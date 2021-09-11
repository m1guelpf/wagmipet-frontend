import { ethers } from 'ethers'
import { FC, useEffect, useState } from 'react'
import LoadingIndicator from '@/components/LoadingIndicator'
import Intro from '@/components/Intro'
import useSWR from 'swr'
import axios from 'axios'
import MintPet from '@/components/MintPet'
import { Biconomy } from '@biconomy/mexa'
import { PetsResponse } from './api/pets'
import PetSelector from '@/components/PetSelector'

const Home: FC = () => {
	const [web3, setWeb3] = useState<ethers.providers.Web3Provider>(null)
	const [biconomy, setBiconomy] = useState<Biconomy>(null)
	const [userAddress, setUserAddress] = useState<string>('')
	const { data: petsResponse, mutate: mutatePetResponse } = useSWR<PetsResponse>(
		() => userAddress && `/api/pets?owner=${userAddress}`,
		url => axios.get(url).then(res => res.data),
		{ revalidateOnFocus: false }
	)

	useEffect(() => {
		if (!web3) {
			setUserAddress('')
			return
		}

		web3.getSigner().getAddress().then(setUserAddress)
	}, [web3])

	if (!web3 || !userAddress) {
		return <Intro setWeb3={setWeb3} setBiconomy={setBiconomy} />
	}

	if (!petsResponse) return <LoadingIndicator />

	if (Object.keys(petsResponse.pets).length > 0) return <PetSelector petList={petsResponse.pets} setPetResponse={mutatePetResponse} />

	if (!biconomy) return <LoadingIndicator />

	return <MintPet web3={web3} userAddress={userAddress} biconomy={biconomy} setPetResponse={mutatePetResponse} />
}

export default Home
