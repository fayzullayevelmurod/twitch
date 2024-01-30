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
				'pink': '#9146FF'
			},
		},
	},
	plugins: [],
}