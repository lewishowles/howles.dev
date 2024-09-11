<template>
	<content-section data-test="about-me">
		<template #eyebrow>
			{{ t("about.pre_title") }}
		</template>
		<template #title>
			{{ t("about.title") }}
		</template>
		<template #intro>
			{{ t("about.intro") }}
		</template>

		<div class="flex flex-col gap-12 px-6 lg:flex-row lg:rounded-3xl lg:border lg:border-grey-200 lg:bg-white lg:p-12 dark:border-transparent lg:dark:bg-grey-950/20">
			<div class="flex-1">
				<div v-for="(paragraph, index) in tm('about.text')" :key="index">
					<div v-if="index > 0" class="my-6 flex w-full items-center gap-4">
						<div class="h-px grow bg-current text-purple-300 dark:text-purple-300/50" />
						<icon-glasses class="h-3 w-auto text-purple-300 dark:text-purple-300/50" />
						<div class="h-px grow bg-current text-purple-300 dark:text-purple-300/50" />
					</div>

					<p>{{ paragraph }}</p>
				</div>
			</div>

			<div class="about-me-gradients relative flex flex-1 flex-col justify-center gap-7 p-12">
				<icon-film-reel class="dark:neon-glow size-12 text-pink-700 dark:text-pink-200" />

				<div class="bg-gradient-to-br from-pink-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-pink-200 dark:to-purple-300">
					{{ t("about.quote") }}
				</div>

				<div class="absolute inset-x-0 bottom-0 hidden grid-cols-7 gap-14 px-12 pb-12 text-pink-700 xl:grid dark:text-pink-200">
					<component :is="icon" v-for="(icon, index) in icons" :key="index" class="size-[1.125rem]" />
				</div>
			</div>
		</div>
	</content-section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import ContentSection from "@/components/content-section/content-section.vue";

const { t, tm } = useI18n();

const icons = [
	"icon-leaf",
	"icon-accessibility",
	"icon-brush",
	"icon-document",
	"icon-bug",
	"icon-robot",
	"icon-magnify",
	"icon-speech",
	"icon-lightbulb",
	"icon-film",
	"icon-spinner",
	"icon-branch",
	"icon-database",
	"icon-run",
];
</script>

<style>
.about-me-gradients {
	--offset: 4px;

	border-radius: calc(1.5rem - var(--offset));
	margin-bottom: calc(-3rem + var(--offset));
	margin-left: calc(-3rem + var(--offset));
	margin-right: calc(-3rem + var(--offset));

	@media (min-width: 1024px) {
		margin-top: calc(-3rem + var(--offset));
		margin-left: 0;
	}

	background-color: theme("colors.grey.50");
	background-image:
		radial-gradient(circle at 69% 65%, #F3E8FF 0%, rgba(243, 232, 255, 0) 50%),
		radial-gradient(circle at 35% 27%, #DFF3FE 0%, rgba(223, 243, 254, 0) 50%),
		radial-gradient(circle at 73% 24%, #CDFBF1 0%, rgba(205, 251, 241, 0) 50%),
		radial-gradient(circle at 19% 76%, #FDE6F4 0%, rgba(253, 230, 244, 0) 50%);

	&:where(.dark, .dark *) {
		background-color: theme("colors.grey.950");
		background-image:
			radial-gradient(circle at 69% 65%, rgba(192, 131, 252, 0.2) 0%, rgba(192, 131, 252, 0) 50%),
			radial-gradient(circle at 35% 27%, rgba(55, 190, 248, 0.2) 0%, rgba(55, 190, 248, 0) 50%),
			radial-gradient(circle at 73% 24%, rgba(45, 212, 191, 0.2) 0%, rgba(45, 212, 191, 0) 50%),
			radial-gradient(circle at 19% 76%, rgba(243, 115, 183, 0.2) 0%, rgba(243, 115, 183, 0) 50%);
	}
}
</style>
