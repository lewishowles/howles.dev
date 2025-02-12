import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PersonOverview from "./person-overview.vue";

const mount = createMount(PersonOverview);

describe("person-overview", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
