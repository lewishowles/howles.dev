import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * The security store keeps track of the current security status of the paddock,
 * so that other elements can react to changes as necessary.
 */
export const useSecurityStore = defineStore("security", () => {
	const secure = ref(null);

	/**
	 * Update the current "secure" status.
	 *
	 * @param  {boolean}  status
	 *     Whether the paddock is currently secure.
	 */
	function updateStatus(status) {
		if (typeof status !== "boolean") {
			return;
		}

		secure.value = status;
	}

	return {
		secure,
		updateStatus,
	};
});
