<template>
	<li data-test="cool-project">
		<a
			class="group relative flex items-start gap-4 rounded-3xl py-6 text-current no-underline"
			v-bind="{ href }"
			target="_blank"
		>
			<component
				:is="icon"
				class="dark:neon-glow group-hocus:text-purple-800 dark:group-hocus:text-purple-300 size-10 text-blue-800 transition-colors dark:text-blue-500"
			/>

			<div class="flex grow flex-col">
				<div class="flex items-center justify-between gap-4">
					<h4
						class="text-grey-950 group-hover:to-grey-950 dark:text-grey-50 dark:group-hover:to-grey-50 text-lg font-bold group-hover:bg-linear-to-r group-hover:from-pink-800 group-hover:via-purple-800 group-hover:bg-clip-text group-hover:text-transparent dark:group-hover:from-purple-300 dark:group-hover:via-pink-300"
					>
						<slot name="title" />
					</h4>

					<project-type-pill v-bind="{ type }" />
				</div>

				<p>
					<slot />
				</p>

				<span class="inline-flex items-center gap-2 text-purple-800 underline dark:text-purple-300">
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
import ProjectTypePill from "@/components/super-cool-projects/fragments/project-type-pill/project-type-pill.vue";

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
	 * The type of project.
	 */
	type: {
		type: String,
		default: null,
	},
});
</script>
