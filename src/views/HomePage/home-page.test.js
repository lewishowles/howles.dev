import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import HomePage from "./HomePage.vue";

const mount = createMount(HomePage);

describe("/", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
