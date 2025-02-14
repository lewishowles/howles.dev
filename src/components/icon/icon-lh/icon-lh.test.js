import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconLh from "./icon-lh.vue";

const mount = createMount(IconLh);

describe("icon-lh", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
