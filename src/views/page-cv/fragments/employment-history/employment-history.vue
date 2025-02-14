<template>
	<div class="lg:col-span-2">
		<section-title class="mb-6">
			{{ t("cv.employment_history.title") }}
		</section-title>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div v-for="(company, companyIndex) in tm('cv.employment_history.companies')" :key="companyIndex" class="relative py-2">
				<div class="absolute inset-y-0 end-full me-4 w-px bg-grey-200 dark:bg-white/30" />
				<template v-if="companyIndex === 0">
					<div class="absolute end-full bottom-full me-4 size-2 translate-x-1/2 rounded-full bg-grey-200 dark:bg-white/30" />
					<icon-double-chevron-down class="absolute end-full top-full me-4 mt-4 size-4 translate-x-1/2 rounded-full text-grey-200 lg:mt-1 dark:text-white/30" />
				</template>
				<template v-else>
					<icon-double-chevron-down class="absolute end-full bottom-full me-4 mb-1 hidden size-4 translate-x-1/2 rounded-full text-grey-200 lg:block dark:text-white/30" />
					<div class="absolute end-full top-full me-4 size-2 translate-x-1/2 rounded-full bg-grey-200 dark:bg-white/30" />
				</template>

				<div class="mb-6 flex items-center gap-4 text-purple-800 dark:text-purple-300">
					<div class="absolute end-full me-4 size-2 translate-x-1/2 rounded-full bg-current outline-2 outline-offset-2" />

					<h3 class="font-bold">
						{{ company.name }}
					</h3>

					<div class="h-px grow bg-gradient-to-r from-grey-200 dark:from-white/30" />
				</div>

				<ol class="flex flex-col mb-6">
					<li v-for="(role, roleIndex) in company.roles" :key="roleIndex" class="relative flex items-baseline gap-4">
						<div class="absolute end-full me-4 mt-2 size-2 translate-x-1/2 rounded-full bg-grey-200 dark:bg-white/30" />

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
