import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconSketchNudgeText from "./project-icon-sketch-nudge-text.vue";

const mount = createMount(ProjectIconSketchNudgeText);

describe("project-icon-sketch-nudge-text", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
