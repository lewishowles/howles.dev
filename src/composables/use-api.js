import { computed, ref } from "vue";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { isNonEmptyString } from "@lewishowles/helpers/string";

/**
 * Mock API helpers to better mimic a more real-world application.
 */
export default function useApi() {
	// Whether data is currently loading.
	const isLoading = ref(false);
	// Whether data has loaded successfully.
	const isReady = ref(false);
	// The date that this API call was last run successfully.
	const lastRunDate = ref(null);

	// The time component of the last run date, if found.
	const lastRunTime = computed(() => {
		if (!(lastRunDate.value instanceof Date)) {
			return "Never";
		}

		return lastRunDate.value.toLocaleTimeString("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		});
	});

	/**
	 * Load data for an API call. For demonstration purposes, this has a
	 * built-in delay, since data is loaded from local files.
	 *
	 * @param  {string}  url
	 *     The URL from which to load data.
	 */
	async function load(url) {
		try {
			isLoading.value = true;

			if (!isNonEmptyString(url)) {
				throw new Error(`Expected non-empty string <url>, received ${getFriendlyDisplay(url)}`);
			}

			await delay(1000);

			let response = await fetch(url);

			response = response.json();
			isReady.value = true;
			lastRunDate.value = new Date();

			return response;
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Add an arbitrary delay to load sample data.
	 *
	 * @param  {integer}  time
	 *     The time, in milliseconds, to wait.
	 */
	function delay(time) {
		return new Promise(resolve => setTimeout(resolve, time));
	}

	return {
		isLoading,
		isReady,
		lastRunTime,
		load,
	};
}
