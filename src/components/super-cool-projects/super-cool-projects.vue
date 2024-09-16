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
			<cool-project v-for="value in coreValues" :key="value.key" v-bind="{ icon: value.icon, href: value.href, type: value.type }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showProjects }">
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
import { ref, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import useIntersect from "@/composables/use-intersect";

import ContentSection from "@/components/content-section/content-section.vue";
import CoolProject from "./fragments/cool-project/cool-project.vue";

const { t } = useI18n();
// A reference to our values list, allowing us to observe it.
const projectsElement = useTemplateRef("projects");
// Set up our intersection observer.
const { show: showProjects } = useIntersect(projectsElement, { mobileThreshold: 0.05, desktopThreshold: 0.2 });

// The list of core value keys, used to generate the components.
const coreValues = ref([
	{ key: "website", icon: "project-icon-website", href: "https://github.com/lewishowles/howles.dev" },
	// { key: "design_system", icon: "project-icon-design-system", href: "" },
	{ key: "components", icon: "project-icon-components", href: "https://github.com/lewishowles/components", type: "library" },
	{ key: "helpers", icon: "project-icon-helpers", href: "https://github.com/lewishowles/helpers", type: "library" },
	{ key: "testing", icon: "project-icon-testing", href: "https://github.com/lewishowles/testing", type: "library" },
	{ key: "sketch_nudge_text", icon: "project-icon-sketch-nudge-text", href: "https://github.com/lewishowles/sketch-nudge-text", type: "sketch" },
	{ key: "sketch_rename_symbol_instances", icon: "project-icon-sketch-rename-symbol-instances", href: "https://github.com/lewishowles/sketch-rename-symbol-instances", type: "sketch" },
	{ key: "sort_imports", icon: "project-icon-sort-imports", href: "https://github.com/lewishowles/sort-imports", type: "vscode" },
	{ key: "wrap_comments", icon: "project-icon-wrap-comments", href: "https://github.com/lewishowles/wrap-comments", type: "vscode" },
	{ key: "gists", icon: "project-icon-gists", href: "https://gist.github.com/lewishowles/" },
	{ key: "guides", icon: "project-icon-guides", href: "https://lewishowles.notion.site/Hi-I-m-Lewis-be37154a2b9d46bb957914b168d0ee81" },
]);
</script>
