<template>
	<div class="w-full max-w-5xl md:rounded-full md:border md:border-grey-200 md:p-1 dark:border-transparent" data-test="looking-for-work">
		<div class="flex flex-col items-center gap-2 bg-gradient-to-t from-purple-50 px-6 pb-10 pt-6 text-center text-purple-800 md:flex-row md:gap-4 md:rounded-full md:border md:border-purple-200 md:bg-purple-50 md:bg-none md:py-5 md:text-left dark:border-transparent dark:from-purple-400/20 dark:pb-6 dark:pt-5 dark:text-white dark:md:bg-purple-400/20 dark:md:bg-none dark:md:pb-5">
			<div class="contents flex-col gap-x-2 ps-2 md:flex lg:flex-row lg:ps-0">
				<div class="flex flex-wrap items-center justify-center gap-2">
					<icon-lightbulb class="size-4" />
					<span class="font-bold">{{ t("role.title") }}</span>
				</div>

				{{ t("role.text") }}
			</div>

			<link-tag href="#" v-bind="{ iconStart: 'icon-download' }" class="button--primary mt-2 text-sm no-underline md:ms-auto md:mt-0 md:ring-offset-purple-50">
				{{ t("role.button") }}
			</link-tag>
		</div>
		<div class="h-2 bg-gradient-to-r from-pink-700 to-purple-800 md:hidden dark:hidden" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
