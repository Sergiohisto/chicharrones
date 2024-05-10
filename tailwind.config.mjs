/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#CA96E0',
					hover: '#343e4a'
				},
				secundary: '#96C26B',
				accent: {
					DEFAULT: '#EDF0E1',
					secundary: '#cda274',
					hover: '#343e4a'
				},
			}
		},
	},
	plugins: [],
}
