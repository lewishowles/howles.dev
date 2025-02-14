<template>
	<div>
		<div class="flex flex-col items-center justify-center gap-4 font-mono text-sm text-grey-500 md:flex-row md:flex-wrap dark:text-white/60">
			<div class="flex items-center gap-2">
				<blended-icon icon="icon-home" />

				{{ t("cv.get_in_touch.location") }}
			</div>
			<span class="hidden md:block">·</span>
			<div class="flex items-center gap-2">
				<blended-icon icon="icon-linkedin" />

				<link-tag v-bind="{ href: `https://${t('cv.get_in_touch.linkedin')}`, external: true }" class="no-underline text-current hocus:underline">
					{{ t("cv.get_in_touch.linkedin") }}
				</link-tag>
			</div>
			<span class="hidden md:block">·</span>
			<div class="flex items-center gap-2">
				<blended-icon icon="icon-github" />

				<link-tag v-bind="{ href: `https://${t('cv.get_in_touch.github')}`, external: true }" class="no-underline text-current hocus:underline">
					{{ t("cv.get_in_touch.github") }}
				</link-tag>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import BlendedIcon from "../blended-icon/blended-icon.vue";

const { t } = useI18n();
</script>
