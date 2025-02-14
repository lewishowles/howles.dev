import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import LogoSheffield from "./logo-sheffield.vue";

const mount = createMount(LogoSheffield);

describe("logo-sheffield", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
