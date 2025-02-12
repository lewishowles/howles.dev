import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconSnippetGenerator from "./project-icon-snippet-generator.vue";

const mount = createMount(ProjectIconSnippetGenerator);

describe("project-icon-snippet-generator", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
