import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconMagnify from "./icon-magnify.vue";

const mount = createMount(IconMagnify);

describe("icon-magnify", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
