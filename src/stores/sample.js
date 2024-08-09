import { defineStore } from "pinia";

export const useSampleStore = defineStore("sample", () => {
	const message = "Hello";

	return {
		message,
	};
});
