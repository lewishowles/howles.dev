import { isNonEmptyString } from "@lewishowles/helpers/string";
import {
	IconChevronDown,
	IconDocument,
	IconEmail,
	IconFilm,
	IconGithub,
	IconHome,
	IconLightbulb,
	IconSearch,
} from "@lewishowles/components";
import { siteIcons } from "virtual:site-icons";

// Library icon names that are passed through this app's dynamic component API.
const libraryIcons = {
	"icon-chevron-down": IconChevronDown,
	"icon-document": IconDocument,
	"icon-email": IconEmail,
	"icon-film": IconFilm,
	"icon-github": IconGithub,
	"icon-home": IconHome,
	"icon-lightbulb": IconLightbulb,
	"icon-search": IconSearch,
};

/**
 * Resolve a stored icon tag to its component, while preserving custom component
 * names for callers outside the known icon set.
 *
 * @param  {string}  icon
 *     The icon component tag to resolve.
 */
export function resolveIconComponent(icon) {
	if (!isNonEmptyString(icon)) {
		return icon;
	}

	return siteIcons[icon] ?? libraryIcons[icon] ?? icon;
}
