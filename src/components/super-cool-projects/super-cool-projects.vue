<template>
	<content-section id="cool-projects" data-test="super-cool-projects">
		<template #eyebrow>
			{{ t("cool_projects.pre_title") }}
		</template>
		<template #title>
			{{ t("cool_projects.title") }}
		</template>
		<template #intro>
			{{ t("cool_projects.intro") }}
		</template>

		<div ref="projects-element" class="flex flex-col gap-10">
			<h3 class="text-2xl font-bold">
				{{ t(`cool_projects.group.highlighted`) }}
			</h3>

			<ul class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				<highlighted-project
					v-for="project in highlightedProjects"
					:key="project.key"
					v-bind="{ icon: project.icon, href: project.href, type: project.type }"
					class="motion-safe:opacity-0"
					:class="{ 'animate-fade-in delay': showProjects }"
				>
					<template #title>
						{{ t(`cool_projects.projects.${project.key}.title`) }}
					</template>

					{{ t(`cool_projects.projects.${project.key}.text`) }}

					<template #link-text>
						{{ t(`cool_projects.projects.${project.key}.link_text`) }}
					</template>
				</highlighted-project>
			</ul>

			<h3 class="text-2xl font-bold">
				{{ t(`cool_projects.group.other`) }}
			</h3>

			<ul class="divide-grey-200 flex flex-col gap-2 divide-y dark:divide-white/20">
				<cool-project
					v-for="project in regularProjects"
					:key="project.key"
					v-bind="{ icon: project.icon, href: project.href, type: project.type }"
					class="motion-safe:opacity-0"
					:class="{ 'animate-fade-in delay': showProjects }"
				>
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
	</content-section>
</template>

<script setup>
import { computed, ref, useTemplateRef } from "vue";
import { isNonEmptyArray } from "@lewishowles/helpers/array";
import { projectTypes } from "./project-types";
import { useI18n } from "vue-i18n";
import useIntersect from "@/composables/use-intersect";

const { t } = useI18n();
// A reference to our values list, allowing us to observe it.
const projectsElement = useTemplateRef("projects-element");

// Set up our intersection observer.
const { show: showProjects } = useIntersect(projectsElement, {
	mobileThreshold: 0,
	desktopThreshold: 0.1,
});

// Our highlighted projects, to be displayed separately to others.
const highlightedProjects = computed(() => {
	if (!isNonEmptyArray(projects.value)) {
		return [];
	}

	return projects.value.filter((project) => project.is_highlighted);
});

// Our regular projects, to be displayed separately to others.
const regularProjects = computed(() => {
	if (!isNonEmptyArray(projects.value)) {
		return [];
	}

	return projects.value.filter((project) => !project.is_highlighted);
});

// The list of cool project keys, used to generate the components.
const projects = ref([
	{
		key: "components",
		icon: "project-icon-components",
		href: "https://components.howles.dev",
		type: projectTypes.LIBRARY,
		is_highlighted: true,
	},
	{
		key: "helpers",
		icon: "project-icon-helpers",
		href: "https://github.com/lewishowles/helpers",
		type: projectTypes.LIBRARY,
		is_highlighted: true,
	},
	{
		key: "howles_design_system",
		icon: "project-icon-design-system",
		href: "https://www.sketch.com/s/27564627-6160-46a0-be47-f134c22e3aa4/prototype/9F9B6303-C9B6-45D0-9232-4C26B47D48A1/a/9F9B6303-C9B6-45D0-9232-4C26B47D48A1?resizeMode=ActualSize",
		type: projectTypes.DESIGN,
		is_highlighted: true,
	},
	{
		key: "boilerplate",
		icon: "project-icon-boilerplate",
		href: "https://github.com/lewishowles/boilerplate",
		type: projectTypes.LIBRARY,
		is_highlighted: true,
	},
	{
		key: "website",
		icon: "project-icon-website",
		href: "https://github.com/lewishowles/howles.dev",
		type: projectTypes.PERSONAL,
	},
	{
		key: "agents",
		icon: "project-icon-agents",
		href: "http://github.com/lewishowles/agents",
		type: projectTypes.CONFIGURATION,
	},
	{
		key: "sketch_organise_symbols",
		icon: "project-icon-sketch-organise-symbols",
		href: "https://github.com/lewishowles/sketch-organise-symbols",
		type: projectTypes.SKETCH,
	},
	{
		key: "sketch_rename_symbol_instances",
		icon: "project-icon-sketch-rename-symbol-instances",
		href: "https://github.com/lewishowles/sketch-rename-symbol-instances",
		type: projectTypes.SKETCH,
	},
	{
		key: "sort_imports",
		icon: "project-icon-sort-imports",
		href: "https://github.com/lewishowles/vs-code-sort-imports",
		type: projectTypes.VSCODE,
	},
	{
		key: "wrap_comments",
		icon: "project-icon-wrap-comments",
		href: "https://github.com/lewishowles/vs-code-wrap-comments",
		type: projectTypes.VSCODE,
	},
	{
		key: "raycast_vs_code_snippet_generator",
		icon: "project-icon-raycast-extension-vs-code-snippet-generator",
		href: "https://github.com/lewishowles/raycast-extension-vs-code-snippet-generator",
		type: projectTypes.RAYCAST,
	},
	{
		key: "raycast_form_builder",
		icon: "project-icon-raycast-extension-form-builder",
		href: "https://github.com/lewishowles/raycast-extension-form-builder",
		type: projectTypes.RAYCAST,
	},
	{
		key: "visual_studio_code_settings",
		icon: "project-icon-visual-studio-code-settings",
		href: "http://github.com/lewishowles/visual-studio-code-settings",
		type: projectTypes.CONFIGURATION,
	},
	{
		key: "zsh",
		icon: "project-icon-zsh",
		href: "http://github.com/lewishowles/zsh",
		type: projectTypes.CONFIGURATION,
	},
]);
</script>
