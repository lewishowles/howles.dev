import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import KeySkills from "./key-skills.vue";

const mount = createMount(KeySkills);

describe("key-skills", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
