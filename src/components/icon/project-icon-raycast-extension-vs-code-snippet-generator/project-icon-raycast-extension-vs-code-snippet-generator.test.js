import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconRaycastExtensionVsCodeSnippetGenerator from "./project-icon-raycast-extension-vs-code-snippet-generator.vue";

const mount = createMount(ProjectIconRaycastExtensionVsCodeSnippetGenerator);

describe("project-icon-raycast-extension-vs-code-snippet-generator", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
