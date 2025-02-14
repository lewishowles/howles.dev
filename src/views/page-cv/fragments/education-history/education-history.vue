<template>
	<div>
		<section-title class="mb-6">
			{{ t("cv.education_history.title") }}
		</section-title>

		<div class="flex flex-col gap-4 lg:flex-row lg:items-center">
			<logo-sheffield class="w-10 h-auto text-[#440099] dark:text-current" />

			<div class="flex flex-col">
				<i18n-t keypath="cv.education_history.degree" tag="strong" scope="global" class="font-bold">
					<template #university_name>
						<span class="font-normal block lg:inline">{{ t("cv.education_history.university_name") }}</span>
					</template>
				</i18n-t>

				<div>{{ t("cv.education_history.grade") }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import SectionTitle from "../section-title/section-title.vue";
import LogoSheffield from "../logo-sheffield/logo-sheffield.vue";

const { t } = useI18n();
</script>
