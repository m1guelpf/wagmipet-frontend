module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		commonjs: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:@next/next/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		route: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'never'],
		indent: 'off',
		'react/no-unescaped-entities': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
	reportUnusedDisableDirectives: true,
	settings: {
		react: {
			version: 'detect',
		},
	},
}
