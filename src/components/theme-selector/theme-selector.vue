<template>
	<summary-details
		v-bind="{ floating: true, align: 'end', icon: currentThemeIcon, closeWithClickOutside: true }"
		class="absolute end-0 top-0 me-6 mt-6"
		summary-classes="rounded-md border border-transparent p-2 text-grey-500 transition-colors hocus:border-grey-200 hocus:bg-white dark:text-pink-300 dark:hocus:border-transparent dark:hocus:bg-grey-950"
		details-classes="animate-fade-in-down mt-2 flex flex-col whitespace-nowrap rounded-md border border-grey-200 bg-white py-2 text-sm shadow-sm dark:border-transparent dark:bg-grey-950/20"
		icon-classes="size-5"
		data-test="theme-selector"
	>
		<template #summary>
			<span class="sr-only">Choose theme</span>
		</template>

		<template v-for="theme in themes" :key="theme.key">
			<ui-button
				:icon-start="theme.icon"
				class="px-4 py-2 transition-colors active:bg-purple-100 active:text-purple-800 hocus:bg-purple-50 hocus:text-purple-700 dark:active:bg-pink-500/20 dark:active:text-pink-400 dark:hocus:bg-pink-400/20 dark:hocus:text-pink-300"
				:class="{ 'text-purple-700 dark:text-pink-300': theme.key === currentTheme }"
				icon-classes="size-4"
				data-test="theme-selector-button"
				@click="setTheme(theme.key)"
			>
				{{ theme.label }}
			</ui-button>
		</template>
	</summary-details>
</template>

<script setup>
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

// The user's current theme, based on a local storage key and the system
// settings.
const currentTheme = useColorMode({ storageKey: "howles:colour-scheme", disableTransition: false });
// The appropriate icon representing the currently selected theme.
const currentThemeIcon = computed(() => (currentTheme.value === "dark" ? "icon-moon" : "icon-sun"));

// Available theme selections.
const themes = [
	{ key: "dark", label: "Dark mode", icon: "icon-moon" },
	{ key: "light", label: "Light mode", icon: "icon-sun" },
	{ key: "auto", label: "System (auto)", icon: "icon-laptop" },
];

/**
 * Set a new theme.
 *
 * @param  {string}  desiredTheme
 *     The new theme to set (one of light, dark, and auto).
 */
function setTheme(desiredTheme) {
	if (!["light", "dark", "auto"].includes(desiredTheme)) {
		return;
	}

	currentTheme.value = desiredTheme;
}
</script>
