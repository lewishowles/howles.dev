<template>
	<div class="flex flex-col gap-3 text-balance rounded-2xl bg-gradient-to-b from-grey-50 to-white px-12 py-10 md:bg-gradient-to-br md:from-pink-700 md:to-purple-800 md:text-lg md:text-white dark:max-md:bg-none" data-test="welcome-part-one">
		<p class="font-bold">
			{{ t("welcome.part_one.hi") }}
		</p>

		<i18n-t keypath="welcome.part_one.text" tag="p" scope="global">
			<template #experience>
				<strong>{{ t("welcome.part_one.experience") }}</strong>
			</template>
		</i18n-t>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
