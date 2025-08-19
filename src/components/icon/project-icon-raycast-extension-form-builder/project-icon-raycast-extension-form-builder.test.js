import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconRaycastExtensionFormBuilder from "./project-icon-raycast-extension-form-builder.vue";

const mount = createMount(ProjectIconRaycastExtensionFormBuilder);

describe("project-icon-raycast-extension-form-builder", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
