import { config } from "@vue/test-utils";
import componentLibrary from "@lewishowles/components";
import i18n from "@/i18n";
import { vi } from "vitest";

// Set the global config for Vue Test Utils
config.global.plugins = [componentLibrary, i18n];

// Mock fetch globally. With a full implementation, an API class would exist,
// which has various methods to make calling APIs and retrieving that data
// trivial. This would then be replaced with mock functions, such as "mockGet",
// which allow mocking individual responses easily from within a test suite.
globalThis.fetch = vi.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ status: "ok" }),
	}),
);
