const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.svelte', './public/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'work-sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
