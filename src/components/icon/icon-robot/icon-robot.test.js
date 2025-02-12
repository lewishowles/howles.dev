import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconRobot from "./icon-robot.vue";

const mount = createMount(IconRobot);

describe("icon-robot", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
