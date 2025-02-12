<template>
	<div class="col-span-2">
		<section-title class="mb-6">
			{{ t("cv.employment_history.title") }}
		</section-title>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div v-for="(company, companyIndex) in tm('cv.employment_history.companies')" :key="companyIndex">
				<div class="mb-6 flex items-center gap-4">
					<h3 class="font-bold text-purple-800 dark:text-purple-300">
						{{ company.name }}
					</h3>

					<div class="h-px grow bg-gradient-to-r from-grey-200 dark:from-white/30" />
				</div>

				<ol class="flex flex-col mb-6">
					<li v-for="(role, roleIndex) in company.roles" :key="roleIndex" class="flex items-baseline gap-4">
						<span class="font-bold">{{ role.title }}</span>
						<span class="text-grey-500 dark:text-grey-50/60">{{ role.dates }}</span>
					</li>
				</ol>

				<p class="mb-6">
					{{ company.introduction }}
				</p>

				<ul class="flex list-disc flex-col gap-6 ps-4">
					<li v-for="(highlight, highlightIndex) in company.highlights" :key="highlightIndex">
						{{ highlight }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import SectionTitle from "../section-title/section-title.vue";

const { t, tm } = useI18n();
</script>
