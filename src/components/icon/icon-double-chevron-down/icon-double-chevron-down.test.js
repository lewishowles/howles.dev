import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconDoubleChevronDown from "./icon-double-chevron-down.vue";

const mount = createMount(IconDoubleChevronDown);

describe("icon-double-chevron-down", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
