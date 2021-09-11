export const formatAddressShort = (address: string): string => {
	if (!address) return ''

	return `${address.slice(0, 4)}…${address.slice(address.length - 4, address.length)}`
}

export const openWindow = (url: string): void => {
	const a = document.createElement('a')
	a.setAttribute('href', url)
	a.setAttribute('target', '_blank')

	a.click()
}
