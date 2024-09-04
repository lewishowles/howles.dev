import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import { flushPromises } from "@vue/test-utils";
import HeadlineUsers from "./headline-users.vue";
import sampleData from "./fixtures/users.json";

const mount = createMount(HeadlineUsers);

describe("headline-users", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});

	describe("Computed", () => {
		describe("currentPeriod", () => {
			test("should return a formatted figure", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				vm.statistics = {
					current_period: {
						user_count: 56500,
					},
				};

				expect(vm.currentPeriod).toBe("56,500");
			});

			describe("should return null if current_period is not a number", () => {
				test.for([
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, count]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					vm.statistics = {
						current_period: {
							user_count: count,
						},
					};

					expect(vm.currentPeriod).toBe(null);
				});
			});
		});

		describe("comparison", () => {
			test("should return the correct percentage difference", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				vm.statistics = {
					current_period: {
						user_count: 120,
					},
					previous_period: {
						user_count: 100,
					},
				};

				expect(vm.comparison).toBe("20%");

				vm.statistics = {
					current_period: {
						user_count: 75,
					},
					previous_period: {
						user_count: 100,
					},
				};

				expect(vm.comparison).toBe("-25%");
			});

			describe("should return null if current_period is not a number", () => {
				test.for([
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, currentPeriod]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					vm.statistics = {
						current_period: {
							user_count: currentPeriod,
						},
						previous_period: {
							user_count: 100,
						},
					};

					expect(vm.comparison).toBe(null);
				});
			});

			test("should handle zero current_period", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				vm.statistics = {
					current_period: {
						user_count: 0,
					},
					previous_period: {
						user_count: 100,
					},
				};

				expect(vm.comparison).toBe("-100%");
			});

			describe("should return null if previous_period is not a number", () => {
				test.for([
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, previousPeriod]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					vm.statistics = {
						current_period: {
							user_count: 120,
						},
						previous_period: {
							user_count: previousPeriod,
						},
					};

					expect(vm.comparison).toBe(null);
				});
			});

			test("should handle zero previous_period", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				vm.statistics = {
					current_period: {
						user_count: 100,
					},
					previous_period: {
						user_count: 0,
					},
				};

				expect(vm.comparison).toBe(null);
			});
		});
	});

	describe("Methods", () => {
		describe("loadData", () => {
			test("should load data from the correct source", async() => {
				fetch.mockResolvedValueOnce({ json: () => sampleData });

				mount();

				await flushPromises();

				expect(fetch).toHaveBeenCalledWith("/data/analytics/users.json");
			});
		});

		describe("formatNumber", () => {
			test("should format a number", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				expect(vm.formatNumber(5, "decimal")).toBe("5");
				expect(vm.formatNumber(500, "decimal")).toBe("500");
				expect(vm.formatNumber(5000, "decimal")).toBe("5,000");
			});

			test("should allow a format to be chosen", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				expect(vm.formatNumber(0.05, "percent")).toBe("5%");
				expect(vm.formatNumber(0.5, "percent")).toBe("50%");
				expect(vm.formatNumber(5, "percent")).toBe("500%");
			});

			describe("should return null when figure is not a number", () => {
				test.for([
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, input]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					expect(vm.formatNumber(input)).toBe(null);
				});
			});

			describe("should default to decimal if format is not a non-empty string", () => {
				test.for([
					["number (positive)", 1],
					["number (negative)", -1],
					["number (NaN)", NaN],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, format]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					expect(vm.formatNumber(5, format)).toBe("5");
				});
			});

			test("should use the default format if the provided format is unknown", () => {
				const wrapper = mount();
				const vm = wrapper.vm;

				expect(vm.formatNumber(5, "unknown")).toBe("5");
			});
		});
	});
});
