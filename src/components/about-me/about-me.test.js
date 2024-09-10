import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import AboutMe from "./about-me.vue";

const mount = createMount(AboutMe);

describe("about-me", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
