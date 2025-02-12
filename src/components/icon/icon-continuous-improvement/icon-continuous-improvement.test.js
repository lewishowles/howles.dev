import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconContinuousImprovement from "./icon-continuous-improvement.vue";

const mount = createMount(IconContinuousImprovement);

describe("icon-continuous-improvement", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
