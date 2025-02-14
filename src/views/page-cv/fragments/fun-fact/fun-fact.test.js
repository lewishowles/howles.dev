import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import FunFact from "./fun-fact.vue";

const mount = createMount(FunFact);

describe("fun-fact", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
