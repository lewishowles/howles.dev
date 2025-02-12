import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import EmploymentHistory from "./employment-history.vue";

const mount = createMount(EmploymentHistory);

describe("employment-history", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
