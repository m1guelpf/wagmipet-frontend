// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	darkMode: 'class',
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
				dance: '700ms ease 0s 2 normal none running dance',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				},
				dance: {
					'0%, 100%': { transform: '' },
					'50%': { transform: 'scaleX(-1)' },
				},
			},
		},
	},
	plugins: [],
}
