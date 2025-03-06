<template>
	<div class="w-full max-w-5xl text-sm lg:rounded-full lg:border lg:border-grey-200 lg:p-1 lg:text-base dark:border-purple-400/20" data-test="looking-for-work">
		<div class="flex flex-col items-center gap-2 bg-purple-50 px-12 py-6 text-center text-purple-800 lg:flex-row lg:gap-4 lg:rounded-full lg:border lg:border-purple-200 lg:py-5 lg:py-10 lg:text-left dark:border-transparent dark:bg-purple-400/20 dark:text-white dark:lg:py-5">
			<div class="contents gap-x-2 ps-2 lg:flex lg:flex-row lg:ps-0">
				<div class="animate-fade-in-left flex flex-wrap items-center justify-center gap-2">
					<icon-lightbulb class="size-4" />
					<span class="font-bold">{{ t("new_role.title") }}</span>
				</div>

				<span class="animate-fade-in-left delay">{{ t("new_role.text") }}</span>
			</div>

			<router-link v-bind="{ to: { name: 'cv' } }" class="animate-fade-in-right button--primary mt-2 inline-flex items-center gap-2 text-sm no-underline lg:ms-auto lg:mt-0 lg:ring-offset-purple-50">
				{{ t("new_role.button") }}

				<icon-arrow-right />
			</router-link>
		</div>
		<div class="h-2 bg-linear-to-r from-pink-700 to-purple-800 lg:hidden dark:hidden" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
