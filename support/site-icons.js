import { existsSync, readdirSync } from "node:fs";

// The generated module consumed by runtime icon-name resolution.
const iconsId = "virtual:site-icons";

// The icon source directory used to build the runtime registry.
const iconsDirectory = new URL("../src/components/icon/", import.meta.url);

/**
 * Convert a component tag to its PascalCase component export name.
 *
 * @param  {string}  tag
 *     The kebab-case component tag.
 */
function tagToComponentName(tag) {
	return tag
		.split("-")
		.map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
		.join("");
}

/**
 * Resolve a public virtual module ID to the private Vite module ID.
 *
 * @param  {string}  id
 *     The public virtual module ID.
 */
function resolved(id) {
	return `\0${id}`;
}

/**
 * Build the icon manifest from the local icon component directories.
 */
function getSiteIconManifest() {
	return readdirSync(iconsDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map(({ name: tag }) => ({
			name: tagToComponentName(tag),
			path: `@/components/icon/${tag}/${tag}.vue`,
			tag,
		}))
		.filter(({ path }) => existsSync(new URL(path.replace("@/", "../src/"), import.meta.url)));
}

/**
 * Generate the local runtime icon registry for components that accept icon
 * names as strings.
 */
export function createSiteIcons() {
	return {
		name: "create-site-icons",

		resolveId(id) {
			if (id === iconsId) {
				return resolved(id);
			}
		},

		load(id) {
			if (id !== resolved(iconsId)) {
				return;
			}

			const icons = getSiteIconManifest();

			const imports = icons
				.map(({ name, path }) => `import ${name} from ${JSON.stringify(path)};`)
				.join("\n");

			const entries = icons.map(({ name, tag }) => `${JSON.stringify(tag)}: ${name}`).join(",\n");

			return `${imports}\n\nexport const siteIcons = {\n${entries}\n};`;
		},
	};
}
