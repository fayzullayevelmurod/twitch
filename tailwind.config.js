/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			darkMode: 'class',
			colors: {
				'black-pink': '#291A5D',
				'pink': '#9146FF',
				'gray': '#4F4F4F'
			},
			fontFamily: {
				'2MASS-J1808': '"2MASS J1808 Normal"'
			}
		},
	},
	plugins: [],
}