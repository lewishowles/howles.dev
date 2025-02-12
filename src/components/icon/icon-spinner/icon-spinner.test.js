import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconSpinner from "./icon-spinner.vue";

const mount = createMount(IconSpinner);

describe("icon-spinner", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
