<template>
	<div class="relative gap-3 bg-gradient-to-b from-grey-50 to-white px-12 py-10 md:rounded-2xl md:bg-gradient-to-br md:from-pink-700 md:to-purple-800 md:text-lg md:text-white dark:max-md:from-white/5 dark:max-md:to-transparent" data-test="welcome-part-deux">
		<svg viewBox="0 0 10 1" class="absolute inset-x-0 bottom-full h-auto w-full text-grey-50 md:hidden dark:text-white/5">
			<polygon points="0,1 10,0 10,1" fill="currentColor" />
		</svg>

		<p class="mb-6">
			{{ t("welcome.part_deux.text") }}
		</p>

		<link-tag href="#" icon-end="icon-arrow-right" class="button--primary text-base no-underline hocus:text-white md:bg-grey-950/30 md:bg-none md:ring-offset-pink-700 md:focus-visible:ring-purple-300 md:active:bg-grey-950/50 md:hocus:bg-grey-950/40">
			{{ t("welcome.part_deux.button") }}
		</link-tag>

		<ul class="inset-well mt-10 flex flex-wrap gap-3 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 text-xs text-purple-800 md:gap-5 md:bg-grey-950/20 md:bg-none md:text-sm md:text-white dark:bg-grey-950/20 dark:bg-none dark:max-md:text-grey-200">
			<li v-for="skill in tm('welcome.part_deux.skills')" :key="skill" class="rounded-full border border-current px-[1em] py-[0.5em]" data-test="welcome-part-deux-skill">
				{{ rt(skill) }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { rt, t, tm } = useI18n();
</script>
