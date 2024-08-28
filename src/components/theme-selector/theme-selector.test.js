import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ThemeSelector from "./theme-selector.vue";

const mount = createMount(ThemeSelector);

describe("theme-selector", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
