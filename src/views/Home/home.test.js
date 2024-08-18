import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import Home from "./Home.vue";

const mount = createMount(Home);

describe("home", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
