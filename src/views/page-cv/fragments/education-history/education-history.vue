<template>
	<div>
		<section-title class="mb-6">
			{{ t("cv.education_history.title") }}
		</section-title>

		<div ref="education" class="flex flex-col gap-4 lg:flex-row lg:items-center">
			<logo-sheffield class="h-auto w-10 text-[#440099] motion-safe:opacity-0 dark:text-current" :class="{ 'animate-fade-in-right': showEducation }" />

			<div class="flex flex-col">
				<i18n-t keypath="cv.education_history.degree" tag="strong" scope="global" class="font-bold motion-safe:opacity-0" :class="{ 'animate-fade-in-up': showEducation }">
					<template #university_name>
						<span class="font-normal block lg:inline">{{ t("cv.education_history.university_name") }}</span>
					</template>
				</i18n-t>

				<div class="motion-safe:opacity-0" :class="{ 'animate-fade-in-up delay': showEducation }">
					{{ t("cv.education_history.grade") }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useTemplateRef } from "vue";

import SectionTitle from "../section-title/section-title.vue";
import LogoSheffield from "../logo-sheffield/logo-sheffield.vue";
import useIntersect from "@/composables/use-intersect";

const { t } = useI18n();
const educationElement = useTemplateRef("education");
const { show: showEducation } = useIntersect(educationElement, { threshold: 0.5 });
</script>
