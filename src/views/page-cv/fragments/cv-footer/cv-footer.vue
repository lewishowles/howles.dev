<template>
	<div ref="footer" class="relative self-stretch">
		<div class="flex items-center justify-between gap-4">
			<router-link v-bind="{ to: { name: 'home' } }" class="inline-flex items-center gap-2 text-sm motion-safe:opacity-0" :class="{ 'animate-fade-in-right': showFooter }">
				<icon-arrow-left />

				{{ t("cv.footer.home") }}
			</router-link>

			<icon-lh class="h-16 w-auto text-purple-800 dark:text-blue-400 motion-safe:opacity-0" :class="{ 'animate-fade-in-left delay': showFooter }" />
		</div>

		<icon-glasses class="watermark pointer-events-none fixed start-0 bottom-0 h-80 w-auto -translate-x-1/3 opacity-20 mix-blend-overlay" :style="{ transform: `translateY(${translateProportion}%)` }" />
	</div>
</template>

<script setup>
import { computed, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import { useWindowScroll } from "@vueuse/core";
import useIntersect from "@/composables/use-intersect";

const footerElement = useTemplateRef("footer");
const { show: showFooter } = useIntersect(footerElement, { threshold: 0.5 });

const { t } = useI18n();
const { y } = useWindowScroll();

// What proportion of our glasses image to translate, based on the current
// window scroll position.
const translateProportion = computed(() => {
	return Math.max(10, 35 - (y.value / document.body.scrollHeight) * 35);
});
</script>

<style>
.watermark {
	mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>

