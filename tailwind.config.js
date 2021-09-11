// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				green: colors.green,
			},
			fontFamily: {
				sans: ['VT323', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				blink: '1000ms ease 0s infinite normal none running blink',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				},
			},
		},
	},
	plugins: [],
}
