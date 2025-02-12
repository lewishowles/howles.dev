import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconRun from "./icon-run.vue";

const mount = createMount(IconRun);

describe("icon-run", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
