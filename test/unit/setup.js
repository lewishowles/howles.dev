import { config } from "@vue/test-utils";
import componentLibrary from "@lewishowles/components";
import i18n from "@/i18n";

// Set the global config for Vue Test Utils
config.global.plugins = [componentLibrary, i18n];
