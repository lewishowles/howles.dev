<template>
	<bento-box class="h-full" data-test="user-preferences">
		<h2 class="mb-1 text-lg font-semibold text-grey-950 dark:text-grey-50">
			{{ t("user_preferences.title") }}
		</h2>

		<p class="mb-6">
			{{ t("user_preferences.intro") }}
		</p>

		<button-group v-model="currentTheme" v-bind="{ options: tm('theme.options') }">
			{{ t('user_preferences.theme.label') }}

			<template #introduction>
				{{ t("user_preferences.theme.intro") }}
			</template>
		</button-group>
	</bento-box>
</template>

<script setup>
import { useColorMode } from "@vueuse/core";
import { useI18n } from "vue-i18n";

import BentoBox from "@/components/welcome-bento/fragments/bento-box/bento-box.vue";

const { t, tm } = useI18n();
// The user's current theme, based on a local storage key and the system
// settings.
const currentTheme = useColorMode({ storageKey: "howles:colour-scheme", disableTransition: false });
</script>
