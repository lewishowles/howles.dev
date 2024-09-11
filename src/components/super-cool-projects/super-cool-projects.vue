<template>
	<content-section data-test="cool-projects">
		<template #eyebrow>
			{{ t("cool_projects.pre_title") }}
		</template>
		<template #title>
			{{ t("cool_projects.title") }}
		</template>
		<template #intro>
			{{ t("cool_projects.intro") }}
		</template>

		<ul ref="projects" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			<cool-project v-for="value in coreValues" :key="value.key" v-bind="{ icon: value.icon, href: value.href }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showProjects }">
				<template #title>
					{{ t(`cool_projects.projects.${value.key}.title`) }}
				</template>

				{{ t(`cool_projects.projects.${value.key}.text`) }}

				<template #link-text>
					{{ t(`cool_projects.projects.${value.key}.link_text`) }}
				</template>
			</cool-project>
		</ul>
	</content-section>
</template>

<script setup>
import { computed, ref, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import { useIntersectionObserver, useMediaQuery } from "@vueuse/core";

import ContentSection from "@/components/content-section/content-section.vue";
import CoolProject from "./fragments/cool-project/cool-project.vue";

const { t } = useI18n();
// Whether to show the core values elements.
const showProjects = ref(false);
// A reference to our values list, allowing us to observe it.
const projectsElement = useTemplateRef("projects");
// Whether we're looking at a (relatively) large screen.
const largeScreen = useMediaQuery("(min-width: 1024px)");
// The threshold at which to fade in our projects. Since the threshold is a
// percentage of the element visible at one time, this needs to be smaller on
// smaller screens.
const intersectionThreshold = computed(() => {
	if (!largeScreen.value) {
		return 0.05;
	}

	return 0.2;
});

// The list of core value keys, used to generate the components.
const coreValues = ref([
	{ key: "website", icon: "project-icon-website", href: "https://github.com/lewishowles/howles.dev" },
	// { key: "design_system", icon: "project-icon-design-system", href: "" },
	{ key: "components", icon: "project-icon-components", href: "https://github.com/lewishowles/components" },
	{ key: "helpers", icon: "project-icon-helpers", href: "https://github.com/lewishowles/helpers" },
	{ key: "testing", icon: "project-icon-testing", href: "https://github.com/lewishowles/testing" },
	{ key: "sketch_nudge_text", icon: "project-icon-sketch-nudge-text", href: "https://github.com/lewishowles/sketch-nudge-text" },
	{ key: "sketch_rename_symbol_instances", icon: "project-icon-sketch-rename-symbol-instances", href: "https://github.com/lewishowles/sketch-rename-symbol-instances" },
	// { key: "sort_imports", icon: "project-icon-sort-imports", href: "" },
	{ key: "wrap_comments", icon: "project-icon-wrap-comments", href: "https://github.com/lewishowles/wrap-comments" },
	{ key: "gists", icon: "project-icon-gists", href: "https://gist.github.com/lewishowles/" },
]);

const { stop } = useIntersectionObserver(projectsElement, ([{ isIntersecting }]) => {
	showProjects.value = isIntersecting;

	if (isIntersecting) {
		stop();
	}
}, { threshold: intersectionThreshold.value });
</script>
