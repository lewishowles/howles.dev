import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconHelpers from "./project-icon-helpers.vue";

const mount = createMount(ProjectIconHelpers);

describe("project-icon-helpers", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
