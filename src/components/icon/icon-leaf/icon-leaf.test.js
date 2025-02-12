import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconLeaf from "./icon-leaf.vue";

const mount = createMount(IconLeaf);

describe("icon-leaf", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
