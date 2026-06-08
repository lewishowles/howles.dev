import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import IconEfficiency from "./icon-efficiency.vue";

const mount = createMount(IconEfficiency);

describe("icon-efficiency", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
