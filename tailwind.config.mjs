/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'linkedin-blue': '#0072b1',
				'github-black': '#24292e',
			},
		},
	},
	plugins: [],
}
