import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconSketchRenameSymbolInstances from "./project-icon-sketch-rename-symbol-instances.vue";

const mount = createMount(ProjectIconSketchRenameSymbolInstances);

describe("project-icon-sketch-rename-symbol-instances", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
