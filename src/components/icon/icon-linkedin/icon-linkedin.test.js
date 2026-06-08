import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import IconLinkedin from "./icon-linkedin.vue";

const mount = createMount(IconLinkedin);

describe("icon-linkedin", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
