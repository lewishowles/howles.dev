import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import WelcomeBento from "./welcome-bento.vue";

const mount = createMount(WelcomeBento);

describe("welcome-bento", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
