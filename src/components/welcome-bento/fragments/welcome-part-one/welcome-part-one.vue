<template>
	<div class="flex flex-col justify-center gap-3 rounded-2xl bg-linear-to-br from-pink-700 to-purple-800 p-8 text-balance text-white lg:px-12 lg:py-10 lg:text-lg" data-test="welcome-part-one">
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
