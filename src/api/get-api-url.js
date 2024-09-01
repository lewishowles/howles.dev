import { isNonEmptyString } from "@lewishowles/helpers/string";

/**
 * Retrieve the full path to an API url.
 *
 * @param  {string}  folder
 *     The folder in which to find the data.
 *
 * @param  {string}  filename
 *     The name of the file containing the data to load. Defaults to "default".
 */
export function getApiUrl(folder, filename) {
	if (!isNonEmptyString(folder)) {
		return null;
	}

	if (!isNonEmptyString(filename)) {
		filename = "default";
	}

	return `/data/${folder}/${filename}.json`;
}
