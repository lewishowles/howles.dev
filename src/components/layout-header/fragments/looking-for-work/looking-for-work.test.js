import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import LookingForWork from "./looking-for-work.vue";

const mount = createMount(LookingForWork);

describe("looking-for-work", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
