import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import SectionTitle from "./section-title.vue";

const mount = createMount(SectionTitle);

describe("section-title", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
