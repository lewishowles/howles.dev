<template>
	<div class="animate-fade-in-right absolute start-0 top-0 ms-4 mt-5">
		<link-tag href="/Lewis Howles - CV.pdf" v-bind="{ iconStart: 'icon-download' }" download class="button--primary text-sm no-underline lg:ring-offset-purple-50 dark:hidden">
			{{ t("cv.download_cv") }}
		</link-tag>

		<link-tag href="/Lewis Howles - CV - Dark.pdf" v-bind="{ iconStart: 'icon-download' }" download class="button--primary not-dark:hidden text-sm no-underline lg:ring-offset-purple-50 dark:inline-flex">
			{{ t("cv.download_cv") }}
		</link-tag>
	</div>

	<div class="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 pb-10 md:pb-20 lg:gap-28">
		<div class="flex flex-col gap-16">
			<layout-header v-bind="{ includeLookingForWork: false }" />

			<get-in-touch />
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div class="flex flex-col gap-10">
				<person-overview />

				<preferred-tools />
			</div>

			<key-skills />

			<employment-history />

			<education-history />

			<fun-fact />
		</div>

		<router-link v-bind="{ to: { name: 'home' } }" class="inline-flex items-center gap-2 self-start">
			<icon-arrow-left />

			{{ t("cv.footer.home") }}
		</router-link>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import EducationHistory from "./fragments/education-history/education-history.vue";
import EmploymentHistory from "./fragments/employment-history/employment-history.vue";
import FunFact from "./fragments/fun-fact/fun-fact.vue";
import GetInTouch from "./fragments/get-in-touch/get-in-touch.vue";
import KeySkills from "./fragments/key-skills/key-skills.vue";
import LayoutHeader from "@/components/layout-header/layout-header.vue";
import PersonOverview from "./fragments/person-overview/person-overview.vue";
import PreferredTools from "./fragments/preferred-tools/preferred-tools.vue";

const { t } = useI18n();
</script>
