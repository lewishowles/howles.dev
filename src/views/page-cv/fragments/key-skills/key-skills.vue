<template>
	<div class="flex flex-col gap-6">
		<section-title>
			{{ t("cv.key_skills.title") }}
		</section-title>

		<ul class="grid grid-cols-[max-content_1fr] items-start gap-4">
			<li v-for="skill in tm('cv.key_skills.skills')" :key="skill.name" class="contents">
				<blended-icon :icon="skill.icon" class="mt-0.5" />

				{{ skill.description }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import BlendedIcon from "../blended-icon/blended-icon.vue";
import SectionTitle from "../section-title/section-title.vue";

const { t, tm } = useI18n();
</script>
