<template>
	<div class="w-full max-w-5xl lg:rounded-full lg:border lg:border-grey-200 lg:p-1 dark:border-purple-400/20" data-test="looking-for-work">
		<div class="flex flex-col items-center gap-2 bg-gradient-to-t from-purple-50 px-6 pb-10 pt-6 text-center text-purple-800 lg:flex-row lg:gap-4 lg:rounded-full lg:border lg:border-purple-200 lg:bg-purple-50 lg:bg-none lg:py-5 lg:text-left dark:border-transparent dark:from-purple-400/20 dark:pb-6 dark:pt-5 dark:text-white dark:lg:bg-purple-400/20 dark:lg:bg-none dark:lg:pb-5">
			<div class="contents gap-x-2 ps-2 lg:flex lg:flex-row lg:ps-0">
				<div class="animate-fade-in-left flex flex-wrap items-center justify-center gap-2">
					<icon-lightbulb class="size-4" />
					<span class="font-bold">{{ t("role.title") }}</span>
				</div>

				<span class="animate-fade-in-left delay">{{ t("role.text") }}</span>
			</div>

			<link-tag href="/Lewis Howles - CV.pdf" v-bind="{ iconStart: 'icon-download' }" download class="animate-fade-in-right button--primary mt-2 text-sm no-underline lg:ms-auto lg:mt-0 lg:ring-offset-purple-50 dark:hidden">
				{{ t("role.button") }}
			</link-tag>

			<link-tag href="/Lewis Howles - CV - Dark.pdf" v-bind="{ iconStart: 'icon-download' }" download class="animate-fade-in-right button--primary mt-2 hidden text-sm no-underline lg:ms-auto lg:mt-0 lg:ring-offset-purple-50 dark:inline-flex">
				{{ t("role.button") }}
			</link-tag>
		</div>
		<div class="h-2 bg-gradient-to-r from-pink-700 to-purple-800 lg:hidden dark:hidden" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
