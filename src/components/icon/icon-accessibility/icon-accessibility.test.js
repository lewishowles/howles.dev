import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconAccessibility from "./icon-accessibility.vue";

const mount = createMount(IconAccessibility);

describe("icon-accessibility", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
