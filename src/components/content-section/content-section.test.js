import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ContentSection from "./content-section.vue";

const mount = createMount(ContentSection);

describe("content-section", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
