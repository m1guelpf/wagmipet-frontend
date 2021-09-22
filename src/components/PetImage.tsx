import { FC } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import slugDark from '@images/slug-dark.png'
import slugLight from '@images/slug-light.png'
import snailDark from '@images/snail-dark.png'
import snailLight from '@images/snail-light.png'
import gravestoneDark from '@images/gravestone-dark.png'
import gravestoneLight from '@images/gravestone-light.png'

const PetImage: FC<{ tokenID: number; isAlive: boolean }> = ({ tokenID, isAlive }) => {
	const { resolvedTheme } = useTheme()

	if (!isAlive) return <Image width={gravestoneLight.width / 2} height={gravestoneLight.height / 2} src={resolvedTheme == 'dark' ? gravestoneDark : gravestoneLight} placeholder="blur" />

	const [petLight, petDark] = tokenID % 2 == 0 ? [snailLight, snailDark] : [slugLight, slugDark]

	return <Image className="animate-dance" width={petLight.width / 2} height={petLight.height / 2} src={resolvedTheme == 'dark' ? petDark : petLight} placeholder="blur" />
}

export default PetImage
