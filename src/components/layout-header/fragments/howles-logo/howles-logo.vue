<template>
	<div class="glasses animate-fade-in-up">
		<img src="@/assets/images/glasses/light.svg" alt="" class="h-[3.75rem] w-36 md:size-auto dark:hidden" width="256" height="108" />
		<img src="@/assets/images/glasses/dark.svg" alt="" class="hidden h-[3.75rem] w-36 md:size-auto dark:block" width="256" height="108" />
	</div>

	<h1 class="animate-fade-in-up delay text-center text-5xl leading-none font-extrabold text-grey-950 md:text-[5rem] dark:bg-linear-to-b dark:from-pink-200 dark:to-grey-50 dark:bg-clip-text dark:text-transparent">
		Lewis Howles
	</h1>

	<div class="animate-fade-in-up delay mt-1 flex items-center gap-2 px-2 text-center text-sm text-purple-800 md:gap-4 md:text-xl dark:text-yellow-100">
		<div class="hidden h-px w-10 bg-current md:block" />
		<span class="whitespace-nowrap font-mono">&lt;</span>
		<span class="text-balance font-extralight">{{ t("header.subtitle") }}</span>
		<span class="whitespace-nowrap font-mono">/&gt;</span>
		<div class="hidden h-px w-10 bg-current md:block" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
