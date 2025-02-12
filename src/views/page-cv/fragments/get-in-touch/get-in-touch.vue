<template>
	<div class="flex flex-wrap items-center justify-center gap-4 font-mono text-sm text-grey-500 dark:text-white/60">
		<div class="flex items-center gap-2">
			<blended-icon icon="icon-home" />

			{{ t("cv.get_in_touch.location") }}
		</div>
		·
		<div class="flex items-center gap-2">
			<blended-icon icon="icon-linkedin" />

			<link-tag v-bind="{ href: `https://${t('cv.get_in_touch.linkedin')}`, external: true }" class="no-underline text-current hocus:underline">
				{{ t("cv.get_in_touch.linkedin") }}
			</link-tag>
		</div>
		·
		<div class="flex items-center gap-2">
			<blended-icon icon="icon-github" />

			<link-tag v-bind="{ href: `https://${t('cv.get_in_touch.github')}`, external: true }" class="no-underline text-current hocus:underline">
				{{ t("cv.get_in_touch.github") }}
			</link-tag>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import BlendedIcon from "../blended-icon/blended-icon.vue";

const { t } = useI18n();
</script>
