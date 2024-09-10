<template>
	<content-section data-test="core-values">
		<template #eyebrow>
			{{ t("core_values.pre_title") }}
		</template>
		<template #title>
			{{ t("core_values.title") }}
		</template>
		<template #intro>
			{{ t("core_values.intro") }}
		</template>

		<ul ref="values" class="grid gap-6 md:grid-cols-3">
			<core-value v-bind="{ icon: 'icon-snap' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.ease_of_use.title") }}
				</template>

				{{ t("core_values.values.ease_of_use.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-accessibility' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.inclusivity.title") }}
				</template>

				{{ t("core_values.values.inclusivity.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-helping-hand' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.helping_hand.title") }}
				</template>

				{{ t("core_values.values.helping_hand.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-joy' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.joy.title") }}
				</template>

				{{ t("core_values.values.joy.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-speech' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.communication.title") }}
				</template>

				{{ t("core_values.values.communication.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-paint' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.design.title") }}
				</template>

				{{ t("core_values.values.design.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-search' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.detail.title") }}
				</template>

				{{ t("core_values.values.detail.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-efficiency' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.efficiency.title") }}
				</template>

				{{ t("core_values.values.efficiency.text") }}
			</core-value>

			<core-value v-bind="{ icon: 'icon-continuous-improvement' }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t("core_values.values.improvement.title") }}
				</template>

				{{ t("core_values.values.improvement.text") }}
			</core-value>
		</ul>
	</content-section>
</template>

<script setup>
import { ref, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import { useIntersectionObserver } from "@vueuse/core";

import ContentSection from "@/components/content-section/content-section.vue";
import CoreValue from "./fragments/core-value/core-value.vue";

const { t } = useI18n();
// Whether to show the core values elements.
const showValues = ref(false);
// A reference to our values list, allowing us to observe it.
const valuesElement = useTemplateRef("values");

const { stop } = useIntersectionObserver(valuesElement, ([{ isIntersecting }]) => {
	showValues.value = isIntersecting;

	if (isIntersecting) {
		stop();
	}
}, { threshold: 0.3 });
</script>
