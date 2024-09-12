<template>
	<li data-test="cool-project">
		<a class="group relative flex h-full flex-col rounded-3xl border border-grey-300 bg-white text-current no-underline transition-all hocus:border-purple-300 hocus:bg-grey-50 hocus:text-current dark:border-0 dark:bg-black/20 dark:hocus:bg-black/30" v-bind="{ href }" target="_blank">
			<pill-badge v-if="isLibrary" v-bind="{ colour: 'purple' }" class="absolute end-0 top-0 me-4 mt-4">
				{{ t("cool_projects.type.library") }}
			</pill-badge>
			<pill-badge v-if="isSketchPlugin" v-bind="{ colour: 'yellow' }" class="absolute end-0 top-0 me-4 mt-4 inline-flex gap-2">
				<img src="@/assets/images/logos/sketch.svg" alt="" class="size-3" />

				{{ t("cool_projects.type.sketch") }}
			</pill-badge>
			<pill-badge v-if="isVSCodePlugin" v-bind="{ colour: 'blue' }" class="absolute end-0 top-0 me-4 mt-4 inline-flex gap-2">
				<img src="@/assets/images/logos/visual-studio-code.svg" alt="" class="size-3" />

				{{ t("cool_projects.type.vscode") }}
			</pill-badge>

			<div class="flex flex-col items-center justify-center gap-12 pt-24 dark:pb-24">
				<component :is="icon" class="dark:neon-glow size-24 text-blue-800 transition-colors group-hocus:text-purple-800 dark:text-blue-500 dark:group-hocus:text-purple-300" />

				<div class="mt-auto h-12 w-full bg-gradient-to-b from-transparent to-grey-100 opacity-50 group-hocus:opacity-100 dark:hidden" />
			</div>

			<div class="flex grow flex-col px-8 pb-8 pt-6">
				<h3 class="mb-0.5 text-lg font-bold text-grey-950 group-hover:bg-gradient-to-r group-hover:from-pink-800 group-hover:via-purple-800 group-hover:to-grey-950 group-hover:bg-clip-text group-hover:text-transparent dark:text-grey-50 dark:group-hover:from-purple-300 dark:group-hover:via-pink-300 dark:group-hover:to-grey-50">
					<slot name="title" />
				</h3>

				<p class="mb-3">
					<slot />
				</p>

				<span class="mt-auto inline-flex items-center gap-2 text-purple-800 underline dark:text-purple-300">
					<slot name="link-text" />
					<icon-external class="transition-all group-hocus:-translate-y-0.5 group-hocus:translate-x-0.5" />
				</span>
			</div>
		</a>
	</li>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
	/**
	 * The icon to display for this project.
	 */
	icon: {
		type: String,
		required: true,
	},

	/**
	 * The link to this project.
	 */
	href: {
		type: String,
		required: true,
	},

	/**
	 * The type of project - one of "library", "sketch", "vscode", or null.
	 */
	type: {
		type: String,
		default: null,
	},
});

const { t } = useI18n();
// Whether this is a library project.
const isLibrary = computed(() => props.type === "library");
// Whether this is a Sketch plugin
const isSketchPlugin = computed(() => props.type === "sketch");
// Whether this is a VS Code plugin
const isVSCodePlugin = computed(() => props.type === "vscode");
</script>
