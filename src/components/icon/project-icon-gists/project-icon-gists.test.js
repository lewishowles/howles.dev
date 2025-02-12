import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconGists from "./project-icon-gists.vue";

const mount = createMount(ProjectIconGists);

describe("project-icon-gists", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
