import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconGlasses from "./icon-glasses.vue";

const mount = createMount(IconGlasses);

describe("icon-glasses", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
