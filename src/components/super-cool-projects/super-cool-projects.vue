<template>
	<content-section id="cool-projects" data-test="cool-projects">
		<template #eyebrow>
			{{ t("cool_projects.pre_title") }}
		</template>
		<template #title>
			{{ t("cool_projects.title") }}
		</template>
		<template #intro>
			{{ t("cool_projects.intro") }}
		</template>

		<ol class="flex gap-4 text-sm mb-10">
			<li v-for="type in projectTypes" :key="type.slug">
				<a :href="`#project-type-${type.slug}`" class="flex items-center gap-2 rounded-lg border border-grey-300 bg-white px-4 py-2 no-underline transition-colors dark:border-0 dark:bg-black/20 hocus:border-purple-300 hocus:bg-grey-50 dark:hocus:bg-black/30">
					{{ t(`cool_projects.type.${type.type}`) }}

					<pill-badge colour="purple">
						{{ type.count }}
					</pill-badge>
				</a>
			</li>
		</ol>

		<div ref="projects-element" class="flex flex-col gap-10">
			<div v-for="type in projectTypes" :key="type.slug">
				<div class="mb-4 flex items-center gap-4">
					<h3 :id="`project-type-${type.slug}`" class="text-2xl font-bold">
						{{ t(`cool_projects.type.${type.type}`) }}
					</h3>

					<link-tag v-bind="{ href: '#cool-projects', iconStart: 'icon-arrow-up' }" class="text-sm">
						{{ t("cool_projects.back_to_top") }}
					</link-tag>
				</div>

				<ul class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					<cool-project v-for="project in groupedProjects[type.type]" :key="project.key" v-bind="{ icon: project.icon, href: project.href, type: project.type }" class="motion-safe:opacity-0" :class="{ 'animate-fade-in delay': showProjects }">
						<template #title>
							{{ t(`cool_projects.projects.${project.key}.title`) }}
						</template>

						{{ t(`cool_projects.projects.${project.key}.text`) }}

						<template #link-text>
							{{ t(`cool_projects.projects.${project.key}.link_text`) }}
						</template>
					</cool-project>
				</ul>
			</div>
		</div>
	</content-section>
</template>

<script setup>
import { arrayLength, isNonEmptyArray } from "@lewishowles/helpers/array";
import { computed, ref, useTemplateRef } from "vue";
import { isNonEmptyObject } from "@lewishowles/helpers/object";
import { isNonEmptyString } from "@lewishowles/helpers/string";
import { useI18n } from "vue-i18n";
import useIntersect from "@/composables/use-intersect";

import ContentSection from "@/components/content-section/content-section.vue";
import CoolProject from "./fragments/cool-project/cool-project.vue";

const { t } = useI18n();
// A reference to our values list, allowing us to observe it.
const projectsElement = useTemplateRef("projects-element");
// Set up our intersection observer.
const { show: showProjects } = useIntersect(projectsElement, { mobileThreshold: 0.05, desktopThreshold: 0.1 });

// The list of cool project keys, used to generate the components.
const projects = ref([
	{
		key: "website", icon: "project-icon-website", href: "https://github.com/lewishowles/howles.dev", type: "primary",
	},
	{
		key: "design_system", icon: "project-icon-design-system", href: "https://www.sketch.com/s/27564627-6160-46a0-be47-f134c22e3aa4/prototype/9F9B6303-C9B6-45D0-9232-4C26B47D48A1/a/9F9B6303-C9B6-45D0-9232-4C26B47D48A1?resizeMode=ActualSize", type: "primary",
	},
	{
		key: "components", icon: "project-icon-components", href: "https://components.howles.dev", type: "library",
	},
	{
		key: "helpers", icon: "project-icon-helpers", href: "https://github.com/lewishowles/helpers", type: "library",
	},
	{
		key: "testing", icon: "project-icon-testing", href: "https://github.com/lewishowles/testing", type: "library",
	},
	{
		key: "form_builder", icon: "project-icon-form-builder", href: "https://github.com/lewishowles/form-builder", type: "tool",
	},
	{
		key: "snippet_generator", icon: "project-icon-snippet-generator", href: "https://github.com/lewishowles/vscode-snippet-generator", type: "tool",
	},
	{
		key: "boilersuit", icon: "project-icon-boilersuit", href: "https://github.com/lewishowles/boilersuit", type: "tool",
	},
	{
		key: "boilerplate", icon: "project-icon-boilerplate", href: "https://github.com/lewishowles/boilerplate", type: "tool",
	},
	{
		key: "sketch_nudge_text", icon: "project-icon-sketch-nudge-text", href: "https://github.com/lewishowles/sketch-nudge-text", type: "sketch",
	},
	{
		key: "sketch_organise_symbols", icon: "project-icon-sketch-organise-symbols", href: "https://github.com/lewishowles/sketch-organise-symbols", type: "sketch",
	},
	{
		key: "sketch_rename_symbol_instances", icon: "project-icon-sketch-rename-symbol-instances", href: "https://github.com/lewishowles/sketch-rename-symbol-instances", type: "sketch",
	},
	{
		key: "sort_imports", icon: "project-icon-sort-imports", href: "https://github.com/lewishowles/sort-imports", type: "vscode",
	},
	{
		key: "wrap_comments", icon: "project-icon-wrap-comments", href: "https://github.com/lewishowles/wrap-comments", type: "vscode",
	},
	{
		key: "refinement", icon: "project-icon-refinement", href: "https://lewishowles.notion.site/Specification-Notification-handler-1b92b9e312118050bb76d8d9200d50a8", type: "misc",
	},
	{
		key: "guides", icon: "project-icon-guides", href: "https://lewishowles.notion.site/Hi-I-m-Lewis-be37154a2b9d46bb957914b168d0ee81", type: "misc",
	},
	{
		key: "gists", icon: "project-icon-gists", href: "https://gist.github.com/lewishowles/", type: "misc",
	},
	{
		key: "reddit", icon: "project-icon-reddit", href: "https://www.reddit.com/user/lhowles/", type: "misc",
	},
]);

// Our projects, grouped by project type.
const groupedProjects = computed(() => {
	if (!isNonEmptyArray(projects.value)) {
		return {};
	}

	return projects.value.reduce((groupedProjects, project) => {
		if (!isNonEmptyObject(project) || !isNonEmptyString(project.type)) {
			return groupedProjects;
		}

		if (!Object.hasOwn(groupedProjects, project.type)) {
			groupedProjects[project.type] = [];
		}

		groupedProjects[project.type].push(project);

		return groupedProjects;
	}, {});
});

// The types of projects displayed, extracted from the project list.
const projectTypes = computed(() => {
	if (!isNonEmptyObject(groupedProjects.value)) {
		return [];
	}

	const projectTypes = [];

	for (const projectType in groupedProjects.value) {
		if (Object.prototype.hasOwnProperty.call(groupedProjects.value, projectType)) {
			const projectGroup = groupedProjects.value[projectType];

			const slug = projectType.toLowerCase().trim().replace(/[\s]+/g, "-").replace(/[^a-z0-9-]/g, "");

			projectTypes.push({ type: projectType, count: arrayLength(projectGroup), slug });
		}
	}

	return projectTypes;
});
</script>
