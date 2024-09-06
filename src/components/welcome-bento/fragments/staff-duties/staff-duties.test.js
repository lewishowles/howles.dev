import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import { flushPromises } from "@vue/test-utils";
import StaffDuties from "./staff-duties.vue";
import sampleData from "./fixtures/duties.json";

const mount = createMount(StaffDuties);

describe("staff-duties", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			fetch.mockResolvedValue({ json: () => sampleData });

			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});

	describe("Methods", () => {
		describe("loadData", () => {
			test("should load data from the correct source", async() => {
				fetch.mockResolvedValue({ json: () => sampleData });

				mount();

				await flushPromises();

				expect(fetch).toHaveBeenCalledWith("/data/analytics/duties.json");
			});

			test("should allow an alternative data source", async() => {
				fetch.mockResolvedValue({ json: () => sampleData });

				const wrapper = mount();

				await flushPromises();

				await wrapper.vm.loadData("surprise");

				expect(fetch).toHaveBeenCalledWith("/data/analytics/surprise.json");
			});
		});
	});
});
