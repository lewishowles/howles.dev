import colors from "tailwindcss/colors";

export default {
	darkMode: "selector",
	content: [
		"./index.html",
		"./src/**/*.vue",
	],
	theme: {
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
	plugins: [],
};

