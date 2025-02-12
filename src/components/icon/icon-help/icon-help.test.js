import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconHelp from "./icon-help.vue";

const mount = createMount(IconHelp);

describe("icon-help", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
