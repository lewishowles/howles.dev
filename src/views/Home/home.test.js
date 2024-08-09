import { describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";
import Home from "./Home.vue";

describe("Home", () => {
	describe("Initialisation", () => {
		test("Initialises a Vue component", () => {
			const wrapper = mount(Home);

			expect(wrapper.text()).toBe("Home");
		});
	});
});
