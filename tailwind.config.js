import colors from "tailwindcss/colors";
import containerQueriesPlugin from "@tailwindcss/container-queries";
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
			maxWidth: {
				"3xs": "12rem",
				"2xs": "16rem",
			},
			minWidth: theme => ({
				...theme("maxWidth"),
				"3xs": "12rem",
				"2xs": "16rem",
			}),
			size: {
				text: "1em",
			},
		},
		colors: {
			// Set our preferred colours from those provided by Tailwind
			"transparent": "transparent",
			"current": "currentColor",
			"black": colors.black,
			"white": colors.white,
			"grey": colors.slate,
			"red": colors.red,
			"orange": colors.orange,
			"yellow": colors.amber,
			"green": colors.green,
			"teal": colors.teal,
			"blue": colors.sky,
			"indigo": colors.indigo,
			"purple": colors.purple,
			"pink": colors.pink,
			"neon-pink": "#E61980",
			"neon-blue": "#19CBE6",
		},
	},
	plugins: [
		hocusPlugin,
		containerQueriesPlugin,
	],
};

