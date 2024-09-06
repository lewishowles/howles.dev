import { beforeEach, describe, expect, test } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useSecurityStore } from "./security";

describe("useSecurityStore", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe("Initialisation", () => {
		test("should have unknown status by default", () => {
			const store = useSecurityStore();

			expect(store.secure).toBe(null);
		});
	});

	describe("Methods", () => {
		describe("updateStatus", () => {
			describe("anything but a boolean status is ignored", () => {
				test.for([
					["number (positive)", 1],
					["number (negative)", -1],
					["string (non-empty)", "string"],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, input]) => {
					const store = useSecurityStore();

					store.updateStatus(input);

					expect(store.secure).toBe(null);
				});
			});

			test("should update the status", () => {
				const store = useSecurityStore();

				store.updateStatus(false);

				expect(store.secure).toBe(false);

				store.updateStatus(true);

				expect(store.secure).toBe(true);
			});
		});
	});
});
