<template>
	<theme-selector />

	<div class="page-header flex w-full flex-col items-center bg-gradient-to-b from-grey-50 pt-16 dark:bg-none" data-test="page-header">
		<div class="glasses">
			<img src="@/assets/images/glasses/light.svg" class="h-[3.75rem] w-36 md:size-auto dark:hidden" width="256" height="108" />
			<img src="@/assets/images/glasses/dark.svg" class="hidden h-[3.75rem] w-36 md:size-auto dark:block" width="256" height="108" />
		</div>

		<h1 class="text-center text-5xl font-extrabold leading-none text-grey-950 md:text-[5rem] dark:text-grey-50">
			Lewis Howles
		</h1>

		<div class="mt-1 flex items-center gap-2 text-sm text-blue-800 md:gap-4 md:text-xl dark:text-yellow-100">
			<div class="hidden h-px w-10 bg-current md:block" />
			<span class="font-mono">&lt;</span>
			<span class="font-extralight">{{ t("header.subtitle") }}</span>
			<span class="font-mono">/&gt;</span>
			<div class="hidden h-px w-10 bg-current md:block" />
		</div>

		<div class="mt-8 w-full max-w-5xl md:rounded-full md:border md:border-grey-200 md:p-1 dark:border-transparent">
			<div class="flex flex-col items-center gap-2 bg-gradient-to-t from-purple-50 px-6 pb-10 pt-6 text-center text-purple-800 md:flex-row md:gap-4 md:rounded-full md:border md:border-purple-200 md:bg-purple-50 md:bg-none md:py-5 md:text-left dark:border-transparent dark:bg-purple-400/20 dark:bg-none dark:pb-6 dark:pt-5 dark:text-white dark:md:pb-5">
				<div class="contents flex-col gap-x-2 ps-2 md:flex lg:flex-row lg:ps-0">
					<div class="flex items-center gap-2">
						<icon-lightbulb class="size-4" />
						<span class="font-bold">{{ t("role.title") }}</span>
					</div>

					{{ t("role.text") }}
				</div>

				<link-tag href="#" v-bind="{ iconStart: 'icon-download' }" class="button--primary mt-2 text-sm no-underline md:ms-auto md:mt-0">
					{{ t("role.button") }}
				</link-tag>
			</div>
			<div class="h-2 bg-gradient-to-r from-pink-700 to-purple-800 md:hidden dark:hidden" />
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

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
