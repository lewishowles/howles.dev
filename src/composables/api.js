import { getFriendlyDisplay, isFunction } from "@lewishowles/helpers/general";
import { ref } from "vue";

/**
 * Mock API helpers to better mimic a more real-world application.
 */
export default function useApi() {
	// Whether data is currently loading.
	const isLoading = ref(false);
	// Whether data has loaded successfully.
	const isReady = ref(false);

	/**
	 * Add an arbitrary delay to load sample data.
	 *
	 * @param  {integer}  time
	 *     The time, in milliseconds, to wait.
	 */
	function delay(time) {
		return new Promise(resolve => setTimeout(resolve, time));
	}

	/**
	 * Load data for an API call. For demonstration purposes, this has a
	 * built-in delay, and retrieves data from a provided generator.
	 *
	 * @param  {function}  dataGenerator
	 *     The callback function that should return the response data.
	 * @param  {any}  params
	 *     Any additional parameters to pass to the data generator
	 */
	async function load(dataGenerator, ...params) {
		try {
			isLoading.value = true;

			await delay(1000);

			if (!isFunction(dataGenerator)) {
				throw new Error(`[api/load]: Expected function <dataGenerator>, received ${getFriendlyDisplay(dataGenerator)}`);
			}

			isReady.value = true;

			return dataGenerator(...params);
		} finally {
			isLoading.value = false;
		}
	}

	return {
		isLoading,
		isReady,
		load,
	};
}
