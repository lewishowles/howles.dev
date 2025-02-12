<template>
	<div class="flex flex-col gap-4">
		<section-title>
			{{ t("cv.preferred_tools.title") }}
		</section-title>

		<p>
			{{ t("cv.preferred_tools.intro") }}
		</p>

		<dl class="grid grid-cols-[max-content_1fr] items-start">
			<template v-for="tool in tm('cv.preferred_tools.tools')" :key="tool.name">
				<dt class="font-semibold pr-4 flex gap-2 items-center">
					{{ tool.name }}
					<div class="h-px grow bg-gradient-to-l from-grey-200 dark:from-white/30" />
				</dt>
				<dd>{{ tool.description }}</dd>
			</template>
		</dl>

		<text-to-paragraphs :text="t('cv.preferred_tools.outro')" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import SectionTitle from "../section-title/section-title.vue";

const { t, tm } = useI18n();
</script>
