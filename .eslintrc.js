module.exports = {
	env: {
		browser: true,
		es6: true,
		'cypress/globals': true,
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
};
