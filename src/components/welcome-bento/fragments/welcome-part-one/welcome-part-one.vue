<template>
	<div class="flex flex-col justify-center gap-3 text-balance rounded-2xl bg-gradient-to-b from-grey-50 to-white px-12 py-10 lg:bg-gradient-to-br lg:from-pink-700 lg:to-purple-800 lg:text-lg lg:text-white dark:max-lg:bg-none" data-test="welcome-part-one">
		<p class="font-bold">
			{{ t("welcome.part_one.hi") }}
		</p>

		<i18n-t keypath="welcome.part_one.text" tag="p" scope="global">
			<template #experience>
				<strong class="font-bold">{{ t("welcome.part_one.experience") }}</strong>
			</template>
		</i18n-t>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
