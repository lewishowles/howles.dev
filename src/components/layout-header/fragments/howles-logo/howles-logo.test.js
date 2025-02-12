import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import HowlesLogo from "./howles-logo.vue";

const mount = createMount(HowlesLogo);

describe("howles-logo", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
