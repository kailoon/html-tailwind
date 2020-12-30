const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./**/*.html', './**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.coolGray,
			blue: colors.lightBlue
		},
		fontFamily: {
			serif: ['Lora', 'serif'],
			sans: ['Inter', 'sans-serif']
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
