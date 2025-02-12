import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconGuides from "./project-icon-guides.vue";

const mount = createMount(ProjectIconGuides);

describe("project-icon-guides", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
