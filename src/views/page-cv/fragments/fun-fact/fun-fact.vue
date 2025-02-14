<template>
	<div>
		<section-title class="mb-6">
			{{ t("cv.fun_fact.title") }}
		</section-title>

		<div class="flex items-center gap-4">
			<blended-icon icon="icon-run" />

			{{ t("cv.fun_fact.text") }}
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import BlendedIcon from "../blended-icon/blended-icon.vue";
import SectionTitle from "../section-title/section-title.vue";

const { t } = useI18n();
</script>
