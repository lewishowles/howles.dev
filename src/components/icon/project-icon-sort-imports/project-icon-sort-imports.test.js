import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconSortImports from "./project-icon-sort-imports.vue";

const mount = createMount(ProjectIconSortImports);

describe("project-icon-sort-imports", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
