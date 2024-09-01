import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import WelcomePartDeux from "./welcome-part-deux.vue";

const mount = createMount(WelcomePartDeux);

describe("welcome-part-deux", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
