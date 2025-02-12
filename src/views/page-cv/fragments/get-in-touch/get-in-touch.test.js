import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import GetInTouch from "./get-in-touch.vue";

const mount = createMount(GetInTouch);

describe("get-in-touch", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
