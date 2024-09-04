import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import BentoBox from "./bento-box.vue";

const mount = createMount(BentoBox);

describe("bento-box", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
