import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconH from "./icon-h.vue";

const mount = createMount(IconH);

describe("icon-lh", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
