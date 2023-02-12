module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
		'linebreak-style': ['error', 'unix'],
		'no-tabs': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'arrow-body-style': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': 'warn',
		'react/jsx-no-constructed-context-values': 'warn',
		'import/no-extraneous-dependencies': 'warn',
	},
	globals: {
		__IS_DEV__: true,
	},
};
