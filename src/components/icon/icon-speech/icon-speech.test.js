import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import IconSpeech from "./icon-speech.vue";

const mount = createMount(IconSpeech);

describe("icon-speech", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
