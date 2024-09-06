import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import TeamAccess from "./team-access.vue";

const mount = createMount(TeamAccess);

describe("team-access", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
