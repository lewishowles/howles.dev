<template>
	<li data-test="cool-project">
		<a
			class="group border-grey-300 hocus:border-purple-300 hocus:bg-grey-50 hocus:text-current dark:hocus:bg-black/30 relative flex h-full flex-col rounded-3xl border bg-white text-current no-underline transition-all dark:border-0 dark:bg-black/20"
			v-bind="{ href }"
			target="_blank"
		>
			<pill-badge
				v-if="isLibrary"
				v-bind="{ colour: 'purple' }"
				class="absolute end-0 top-0 me-4 mt-4"
			>
				{{ t("cool_projects.type.library") }}
			</pill-badge>
			<pill-badge v-if="isTool" v-bind="{ colour: 'pink' }" class="absolute end-0 top-0 me-4 mt-4">
				{{ t("cool_projects.type.tool") }}
			</pill-badge>
			<pill-badge
				v-if="isSketchPlugin"
				v-bind="{ colour: 'yellow' }"
				class="absolute end-0 top-0 me-4 mt-4 inline-flex gap-2"
			>
				<img src="@/assets/images/logos/sketch.svg" alt="" class="size-3" />

				{{ t("cool_projects.type.sketch") }}
			</pill-badge>
			<pill-badge
				v-if="isVSCodePlugin"
				v-bind="{ colour: 'blue' }"
				class="absolute end-0 top-0 me-4 mt-4 inline-flex gap-2"
			>
				<img src="@/assets/images/logos/visual-studio-code.svg" alt="" class="size-3" />

				{{ t("cool_projects.type.vscode") }}
			</pill-badge>

			<div class="flex flex-col items-center justify-center gap-12 pt-24 dark:pb-24">
				<component
					:is="icon"
					class="dark:neon-glow group-hocus:text-purple-800 dark:group-hocus:text-purple-300 size-24 text-blue-800 transition-colors dark:text-blue-500"
				/>

				<div
					class="to-grey-100 group-hocus:opacity-100 mt-auto h-12 w-full bg-linear-to-b from-transparent opacity-50 dark:hidden"
				/>
			</div>

			<div class="flex grow flex-col px-8 pt-6 pb-8">
				<h4
					class="text-grey-950 group-hover:to-grey-950 dark:text-grey-50 dark:group-hover:to-grey-50 mb-0.5 text-lg font-bold group-hover:bg-linear-to-r group-hover:from-pink-800 group-hover:via-purple-800 group-hover:bg-clip-text group-hover:text-transparent dark:group-hover:from-purple-300 dark:group-hover:via-pink-300"
				>
					<slot name="title" />
				</h4>

				<p class="mb-3">
					<slot />
				</p>

				<span
					class="mt-auto inline-flex items-center gap-2 text-purple-800 underline dark:text-purple-300"
				>
					<slot name="link-text" />
					<icon-external
						class="group-hocus:-translate-y-0.5 group-hocus:translate-x-0.5 transition-all"
					/>
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
	 * The type of project - one of "library", "tool", "sketch", "vscode", or null.
	 */
	type: {
		type: String,
		default: null,
	},
});

const { t } = useI18n();
// Whether this is a library project.
const isLibrary = computed(() => props.type === "Library");
// Whether this is a tool.
const isTool = computed(() => props.type === "Tool");
// Whether this is a Sketch plugin
const isSketchPlugin = computed(() => props.type === "Sketch");
// Whether this is a VS Code plugin
const isVSCodePlugin = computed(() => props.type === "Visual Studio Code");
</script>
