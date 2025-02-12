import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconBug from "./icon-bug.vue";

const mount = createMount(IconBug);

describe("icon-bug", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
