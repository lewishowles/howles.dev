import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CoolProject from "./cool-project.vue";

const mount = createMount(CoolProject);

describe("cool-project", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
