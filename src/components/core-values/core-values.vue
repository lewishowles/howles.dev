<template>
	<content-section>
		<template #eyebrow>
			{{ t("core_values.pre_title") }}
		</template>
		<template #title>
			{{ t("core_values.title") }}
		</template>
		<template #intro>
			{{ t("core_values.intro") }}
		</template>

		<ul class="mx-auto grid max-w-7xl gap-6 pt-12 md:grid-cols-3">
			<core-value v-bind="{ icon: 'icon-snap' }">
				<template #title>
					{{ t("core_values.values.ease_of_use.title") }}
				</template>

				{{ t("core_values.values.ease_of_use.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-accessibility' }">
				<template #title>
					{{ t("core_values.values.inclusivity.title") }}
				</template>

				{{ t("core_values.values.inclusivity.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-helping-hand' }">
				<template #title>
					{{ t("core_values.values.helping_hand.title") }}
				</template>

				{{ t("core_values.values.helping_hand.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-joy' }">
				<template #title>
					{{ t("core_values.values.joy.title") }}
				</template>

				{{ t("core_values.values.joy.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-speech' }">
				<template #title>
					{{ t("core_values.values.communication.title") }}
				</template>

				{{ t("core_values.values.communication.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-paint' }">
				<template #title>
					{{ t("core_values.values.design.title") }}
				</template>

				{{ t("core_values.values.design.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-search' }">
				<template #title>
					{{ t("core_values.values.detail.title") }}
				</template>

				{{ t("core_values.values.detail.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-efficiency' }">
				<template #title>
					{{ t("core_values.values.efficiency.title") }}
				</template>

				{{ t("core_values.values.efficiency.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-continuous-improvement' }">
				<template #title>
					{{ t("core_values.values.improvement.title") }}
				</template>

				{{ t("core_values.values.improvement.text") }}
			</core-value>
		</ul>
	</content-section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import ContentSection from "@/components/content-section/content-section.vue";
import CoreValue from "./fragments/core-value/core-value.vue";

const { t } = useI18n();
</script>
