import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconJoy from "./icon-joy.vue";

const mount = createMount(IconJoy);

describe("icon-joy", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
