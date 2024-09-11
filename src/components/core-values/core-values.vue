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
			<core-value v-for="value in coreValues" :key="value.key" v-bind="{ icon: value.icon }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showValues }">
				<template #title>
					{{ t(`core_values.values.${value.key}.title`) }}
				</template>

				{{ t(`core_values.values.${value.key}.text`) }}
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

// The list of core value keys, used to generate the components.
const coreValues = ref([
	{ key: "ease_of_use", icon: "icon-snap" },
	{ key: "inclusivity", icon: "icon-accessibility" },
	{ key: "helping_hand", icon: "icon-helping-hand" },
	{ key: "joy", icon: "icon-joy" },
	{ key: "communication", icon: "icon-speech" },
	{ key: "design", icon: "icon-paint" },
	{ key: "detail", icon: "icon-search" },
	{ key: "efficiency", icon: "icon-efficiency" },
	{ key: "improvement", icon: "icon-continuous-improvement" },
]);

const { stop } = useIntersectionObserver(valuesElement, ([{ isIntersecting }]) => {
	showValues.value = isIntersecting;

	if (isIntersecting) {
		stop();
	}
}, { threshold: 0.3 });
</script>
