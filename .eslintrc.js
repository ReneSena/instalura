module.exports = {
	env: {
		browser: true,
		es6: true,
		'cypress/globals': true,
		'jest/globals': true,
	},
	extends: [
		'plugin:cypress/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'eslint-config-prettier',
		'prettier/react',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'eslint-plugin-prettier', 'eslint-plugin-cypress'],
	ignorePatterns: ['spec.js', '**/examples/*.js'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.js', '.jsx'] },
		],
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',

		'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
		'react/jsx-props-no-spreading': 'off',
	},
	overrides: [
		{
			files: ['**/*.test.js'],
			plugins: ['jest'],
			env: {
				jest: true,
			},
			// eslint-disable-next-line global-require, import/no-extraneous-dependencies
			...require('eslint-plugin-jest').configs.recommended,
		},
	],
};
