<template>
	<div class="relative flex flex-col items-start gap-3 px-12 py-10 lg:rounded-2xl lg:bg-linear-to-br lg:from-pink-700 lg:to-purple-800 lg:text-lg lg:text-white dark:max-lg:from-white/5 dark:max-lg:to-transparent" data-test="welcome-part-deux">
		<div class="lg:my-auto">
			<i18n-t keypath="welcome.part_deux.text" tag="p" scope="global" class="mb-6">
				<template #easy_to_use>
					<strong class="font-bold">{{ t("welcome.part_deux.easy_to_use") }}</strong>
				</template>
				<template #accessible>
					<strong class="font-bold">{{ t("welcome.part_deux.accessible") }}</strong>
				</template>
			</i18n-t>

			<link-tag href="#" icon-end="icon-arrow-right" class="button--primary text-base no-underline hocus:text-white lg:bg-grey-950/30 lg:bg-none lg:ring-offset-pink-700 lg:focus-visible:ring-purple-300 lg:active:bg-grey-950/50 lg:hocus:bg-grey-950/40">
				{{ t("welcome.part_deux.button") }}
			</link-tag>
		</div>

		<ul ref="skills" class="inset-well--intro mt-10 flex flex-wrap gap-3 rounded-2xl bg-linear-to-br from-pink-50 to-purple-50 text-xs text-purple-800 lg:gap-5 lg:bg-grey-950/20 lg:bg-none lg:text-sm lg:text-white dark:bg-grey-950/20 dark:bg-none dark:max-lg:text-grey-200">
			<li v-for="skill in tm('welcome.part_deux.skills')" :key="skill" class="rounded-full border border-current px-[1em] py-[0.5em] motion-safe:opacity-0" :class="{ 'animate-fade-in-left delay': showSkills }" data-test="welcome-part-deux-skill">
				{{ rt(skill) }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useTemplateRef } from "vue";
import useIntersect from "@/composables/use-intersect";

const { rt, t, tm } = useI18n();
// A reference to our skills list, allowing us to observe it.
const skillsElement = useTemplateRef("skills");
// Set up our intersection observer.
const { show: showSkills } = useIntersect(skillsElement, { threshold: 0.6 });
</script>
