import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconSparkle from "./icon-sparkle.vue";

const mount = createMount(IconSparkle);

describe("icon-sparkle", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
