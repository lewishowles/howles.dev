import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import WhatIHelpWith from "./what-i-help-with.vue";

const mount = createMount(WhatIHelpWith);

describe("what-i-help-with", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
