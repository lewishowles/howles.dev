import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import WelcomePartOne from "./welcome-part-one.vue";

const mount = createMount(WelcomePartOne);

describe("welcome-part-one", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
