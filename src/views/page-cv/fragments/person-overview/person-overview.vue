<template>
	<div class="flex flex-col gap-4">
		<div class="relative">
			<div class="absolute w-4.5 inset-y-0 top-0 right-full mr-8">
				<div class="absolute inset-y-0 w-4.5 rounded bg-purple-400 dark:bg-pink-400" />
				<div class="absolute inset-y-0 w-3 rounded bg-purple-600 dark:bg-pink-600" />
				<div class="absolute inset-y-0 w-1.5 rounded bg-purple-800 dark:bg-pink-800" />
			</div>

			<i18n-t keypath="cv.person_overview.introduction" tag="p" scope="global">
				<template #years>
					<strong class="font-bold">{{ t("cv.person_overview.years") }}</strong>
				</template>
			</i18n-t>
		</div>

		<text-to-paragraphs :text="t('cv.person_overview.text')" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
