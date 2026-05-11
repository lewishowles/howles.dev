import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconWave from "./icon-wave.vue";

const mount = createMount(IconWave);

describe("icon-bug", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
