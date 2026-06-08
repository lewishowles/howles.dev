import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import EducationHistory from "./education-history.vue";

const mount = createMount(EducationHistory);

describe("education-history", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
