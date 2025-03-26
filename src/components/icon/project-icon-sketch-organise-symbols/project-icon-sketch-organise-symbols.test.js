import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconSketchOrganiseSymbols from "./project-icon-sketch-organise-symbols.vue";

const mount = createMount(ProjectIconSketchOrganiseSymbols);

describe("project-icon-sketch-organise-symbols", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
