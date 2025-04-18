import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconRefinement from "./project-icon-refinement.vue";

const mount = createMount(ProjectIconRefinement);

describe("project-icon-refinement", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
