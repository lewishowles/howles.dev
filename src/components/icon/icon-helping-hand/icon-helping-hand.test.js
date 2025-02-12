import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconHelpingHand from "./icon-helping-hand.vue";

const mount = createMount(IconHelpingHand);

describe("icon-helping-hand", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
