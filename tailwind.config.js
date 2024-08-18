import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import hocusPlugin from "tailwindcss-hocus";

export default {
	darkMode: "selector",
	content: [
		"./index.html",
		"./src/**/*.vue",
		"./src/**/*.cy.js",
		"./node_modules/@lewishowles/components/dist/components.js",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["\"Inter Variable\"", ...defaultTheme.fontFamily.sans],
				mono: ["\"IBM Plex Mono\"", ...defaultTheme.fontFamily.mono],
			},
		},
		colors: {
			// Set our preferred colours from those provided by Tailwind
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			grey: colors.slate,
			red: colors.red,
			orange: colors.orange,
			yellow: colors.amber,
			green: colors.green,
			teal: colors.teal,
			blue: colors.sky,
			indigo: colors.indigo,
			purple: colors.purple,
			pink: colors.pink,
		},
	},
	plugins: [hocusPlugin],
};

