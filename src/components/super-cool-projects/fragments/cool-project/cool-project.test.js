import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CoolProject from "./cool-project.vue";

const defaultProps = { icon: "project-icon-website", href: "https://howles.dev" };
const mount = createMount(CoolProject, { props: defaultProps });

describe("cool-project", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
