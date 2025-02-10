import { beforeEach, describe, expect, test } from "vitest";
import { createMount } from "@unit/support/mount";
import { flushPromises } from "@vue/test-utils";
import TeamAccess from "./team-access.vue";
import sampleData from "./fixtures/default.json";

const mount = createMount(TeamAccess);

describe("team-access", () => {
	beforeEach(() => {
		fetch.mockResolvedValueOnce({ json: () => sampleData });
	});

	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});

	describe("Computed", () => {
		describe("users", () => {
			describe("should discard any non-array user data", () => {
				test.for([
					["boolean (true)", true],
					["boolean (false)", false],
					["number (positive)", 1],
					["number (negative)", -1],
					["number (NaN)", NaN],
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["array (empty)", []],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["null", null],
					["undefined", undefined],
				])("%s", async([, userData]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					await flushPromises();

					vm.userData = userData;

					expect(vm.users).toEqual([]);
				});
			});

			test("should add user initials", async() => {
				const wrapper = mount();
				const vm = wrapper.vm;

				await flushPromises();

				vm.userData = [
					{
						id: "123e4567-e89b-12d3-a456-426614174000",
						name: "Sophie Wardhaugh",
						email: "sophie@howles.dev",
						role: "owner",
					},
				];

				expect(vm.users).toEqual([
					{
						id: "123e4567-e89b-12d3-a456-426614174000",
						name: "Sophie Wardhaugh",
						email: "sophie@howles.dev",
						role: "owner",
						initials: "SW",
					},
				]);
			});

			test("should supplement a missing name", async() => {
				const wrapper = mount();
				const vm = wrapper.vm;

				await flushPromises();

				vm.userData = [
					{
						id: "123e4567-e89b-12d3-a456-426614174000",
						email: "sophie@howles.dev",
						role: "owner",
					},
				];

				expect(vm.users).toEqual([
					{
						id: "123e4567-e89b-12d3-a456-426614174000",
						name: "Guest",
						email: "sophie@howles.dev",
						role: "owner",
						initials: "G",
					},
				]);
			});

			describe("should discard any non-object user data", () => {
				test.for([
					["boolean (true)", true],
					["boolean (false)", false],
					["number (positive)", 1],
					["number (negative)", -1],
					["number (NaN)", NaN],
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["object (empty)", {}],
					["null", null],
					["undefined", undefined],
				])("%s", async([, user]) => {
					const wrapper = mount();
					const vm = wrapper.vm;

					await flushPromises();

					vm.userData = [
						{
							id: "123e4567-e89b-12d3-a456-426614174000",
							name: "Sophie Wardhaugh",
							email: "sophie@howles.dev",
							role: "owner",
						},
						user,
					];

					expect(vm.users).toEqual([
						{
							id: "123e4567-e89b-12d3-a456-426614174000",
							name: "Sophie Wardhaugh",
							email: "sophie@howles.dev",
							role: "owner",
							initials: "SW",
						},
					]);
				});
			});
		});
	});
});
