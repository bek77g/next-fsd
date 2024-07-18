import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4CB050',
				'primary-white': '#fff',
				'second-white': '#F7F7F5',
				'primary-dark': '#3B3838',
				'second-dark': '#646464',
				'third-dark': '#8F8F8F',
				stroke: '#E3E7E5',
				yellow: '#EDAB00',
				red: '#B0504C',
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
};
export default config;
