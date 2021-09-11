import { FC } from 'react'
import Link from 'next/link'
import { KeyedMutator } from 'swr/dist/types'
import { PetsResponse } from '@/pages/api/pets'

const PetSelector: FC<{ petList: Record<number, string>; setPetResponse: KeyedMutator<PetsResponse> }> = ({ petList, setPetResponse }) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-8">
			<h1 className="text-5xl md:text-7xl text-center">Who do you want to take care of?</h1>
			<p className="max-w-xs md:max-w-prose text-2xl md:text-3xl text-center">
				Choose one of your $PETs below to visit them, or{' '}
				<button onClick={() => setPetResponse({ pets: [] }, false)} className="underline hover:text-gray-500">
					adopt a new one
				</button>
				.
			</p>
			<div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
				{Object.entries(petList).map(([tokenID, name]) => (
					<Link href={`/pet/${tokenID}`} key={tokenID}>
						<a className="text-3xl p-4 border-4 border-current text-black hover:text-gray-500">{name}</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PetSelector
