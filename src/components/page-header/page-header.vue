<template>
	<theme-selector />

	<div class="page-header flex w-full flex-col items-center bg-gradient-to-b from-grey-50 pt-16 dark:bg-none" data-test="page-header">
		<div class="glasses">
			<img src="@/assets/images/glasses/light.svg" alt="" class="h-[3.75rem] w-36 md:size-auto dark:hidden" width="256" height="108" />
			<img src="@/assets/images/glasses/dark.svg" alt="" class="hidden h-[3.75rem] w-36 md:size-auto dark:block" width="256" height="108" />
		</div>

		<h1 class="text-center text-5xl font-extrabold leading-none text-grey-950 md:text-[5rem] dark:text-grey-50">
			Lewis Howles
		</h1>

		<div class="mt-1 flex items-center gap-2 px-2 text-center text-sm text-purple-800 md:gap-4 md:text-xl dark:text-yellow-100">
			<div class="hidden h-px w-10 bg-current md:block" />
			<span class="whitespace-nowrap font-mono">&lt;</span>
			<span class="text-balance font-extralight">{{ t("header.subtitle") }}</span>
			<span class="whitespace-nowrap font-mono">/&gt;</span>
			<div class="hidden h-px w-10 bg-current md:block" />
		</div>

		<looking-for-work class="mt-8" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import LookingForWork from "./fragments/looking-for-work/looking-for-work.vue";
import ThemeSelector from "@/components/theme-selector/theme-selector.vue";

const { t } = useI18n();
</script>

<style>
.page-header:where(.dark, .dark *),
.glasses:where(.dark, .dark *) {
	position: relative;

	&:before {
		background: radial-gradient(ellipse at center, theme(colors.neon-pink), transparent 70%);
		content: "";
		left: 50%;
		max-width: 100%;
		opacity: 0.5;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}
}

.glasses:where(.dark, .dark *) {
	&:before {
		height: 8rem;
		width: 16rem;
	}
}

.page-header:where(.dark, .dark *) {
	&:before {
		height: 20rem;
		top: 0;
		width: 50rem;
	}
}
</style>
