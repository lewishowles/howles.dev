import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconBrush from "./icon-brush.vue";

const mount = createMount(IconBrush);

describe("icon-brush", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
