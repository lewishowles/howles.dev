<template>
	<div class="w-full max-w-5xl lg:rounded-full lg:border lg:border-grey-200 lg:p-1 dark:border-transparent" data-test="looking-for-work">
		<div class="flex flex-col items-center gap-2 bg-gradient-to-t from-purple-50 px-6 pb-10 pt-6 text-center text-purple-800 lg:flex-row lg:gap-4 lg:rounded-full lg:border lg:border-purple-200 lg:bg-purple-50 lg:bg-none lg:py-5 lg:text-left dark:border-transparent dark:from-purple-400/20 dark:pb-6 dark:pt-5 dark:text-white dark:lg:bg-purple-400/20 dark:lg:bg-none dark:lg:pb-5">
			<div class="contents gap-x-2 ps-2 lg:flex lg:flex-row lg:ps-0">
				<div class="flex flex-wrap items-center justify-center gap-2">
					<icon-lightbulb class="size-4" />
					<span class="font-bold">{{ t("role.title") }}</span>
				</div>

				{{ t("role.text") }}
			</div>

			<link-tag href="#" v-bind="{ iconStart: 'icon-download' }" class="button--primary mt-2 text-sm no-underline lg:ms-auto lg:mt-0 lg:ring-offset-purple-50">
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
