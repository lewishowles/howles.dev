<template>
	<div class="relative self-stretch">
		<div class="flex items-center justify-between gap-4">
			<router-link v-bind="{ to: { name: 'home' } }" class="inline-flex items-center gap-2 text-sm">
				<icon-arrow-left />

				{{ t("cv.footer.home") }}
			</router-link>

			<icon-lh class="h-16 w-auto text-purple-800 dark:text-blue-400" />
		</div>

		<icon-glasses class="watermark pointer-events-none fixed start-0 bottom-0 ms-10 mb-10 h-80 w-auto -translate-x-1/3 opacity-20 mix-blend-overlay" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style>
.watermark {
	mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>

