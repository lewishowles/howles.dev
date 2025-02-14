<template>
	<div class="flex flex-col gap-6">
		<section-title>
			{{ t("cv.preferred_tools.title") }}
		</section-title>

		<p>
			{{ t("cv.preferred_tools.intro") }}
		</p>

		<dl ref="tools" class="grid grid-cols-1 lg:grid-cols-[max-content_1fr] lg:items-start gap-4">
			<template v-for="tool in tm('cv.preferred_tools.tools')" :key="tool.name">
				<dt class="flex items-center gap-2 font-semibold motion-safe:opacity-0" :class="{ 'animate-fade-in-up delay': showTools }">
					{{ tool.name }}
					<div class="h-px grow bg-gradient-to-l from-grey-200 dark:from-white/30" />
				</dt>
				<dd class="motion-safe:opacity-0" :class="{ 'animate-fade-in-up delay': showTools }">
					{{ tool.description }}
				</dd>
			</template>
		</dl>

		<text-to-paragraphs :text="t('cv.preferred_tools.outro')" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useTemplateRef } from "vue";
import useIntersect from "@/composables/use-intersect";

import SectionTitle from "../section-title/section-title.vue";

const { t, tm } = useI18n();

const toolsElement = useTemplateRef("tools");
const { show: showTools } = useIntersect(toolsElement, { threshold: 0.1 });
</script>
