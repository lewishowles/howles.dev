import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import UserPreferences from "./user-preferences.vue";

const mount = createMount(UserPreferences);

describe("user-preferences", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
