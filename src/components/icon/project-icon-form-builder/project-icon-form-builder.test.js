import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconFormBuilder from "./project-icon-form-builder.vue";

const mount = createMount(ProjectIconFormBuilder);

describe("project-icon-form-builder", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
