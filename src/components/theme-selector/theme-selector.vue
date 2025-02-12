<template>
	<summary-details
		v-bind="{ floating: true, align: 'end', icon: currentThemeIcon, closeWithClickOutside: true }"
		class="absolute end-0 top-0 z-10 me-4 mt-4 md:me-6 md:mt-6"
		summary-classes="rounded-md border border-transparent p-2 text-grey-500 transition-colors hocus:border-grey-200 hocus:bg-white dark:text-pink-300 dark:hocus:border-transparent dark:hocus:bg-grey-950"
		details-classes="animate-fade-in-down mt-2 flex flex-col whitespace-nowrap rounded-md border border-grey-200 bg-white py-2 text-sm shadow-xs dark:border-transparent dark:bg-grey-950/40 dark:backdrop-blur-md"
		icon-classes="size-5"
		data-test="theme-selector"
	>
		<template #summary>
			<span class="sr-only">{{ t("theme.label") }}</span>
		</template>

		<template v-for="theme in tm('theme.options')" :key="theme.value">
			<ui-button
				:icon-start="theme.icon"
				class="px-4 py-2 inline-flex items-center transition-colors whitespace-nowrap active:bg-purple-100 active:text-purple-800 hocus:bg-purple-50 hocus:text-purple-700 dark:active:bg-pink-500/20 dark:active:text-pink-400 dark:hocus:bg-pink-400/20 dark:hocus:text-pink-300"
				:class="{ 'text-purple-700 dark:text-pink-300': theme.value === selectedTheme }"
				icon-classes="size-4"
				data-test="theme-selector-button"
				@click="setTheme(theme.value)"
			>
				{{ theme.label }}
			</ui-button>
		</template>
	</summary-details>
</template>

<script setup>
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

// The user's current theme, based on a local storage key and the system
// settings. We use `store` here because it returns the selected mode -
// including "auto" - not just the current theme.
const colourMode = useColorMode({ storageKey: "howles:colour-scheme", disableTransition: false, initialValue: "dark" });
const currentTheme = colourMode;
const { store: selectedTheme } = colourMode;

// The appropriate icon representing the currently selected theme.
const currentThemeIcon = computed(() => (currentTheme === "dark" ? "icon-moon" : "icon-sun"));

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
