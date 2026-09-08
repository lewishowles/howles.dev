<template>
	<li
		class="border-grey-200 flex min-h-36 flex-col border bg-white p-6 sm:p-8 dark:border-0 dark:bg-black/20"
	>
		<div class="mb-4 flex items-start justify-between gap-4">
			<span aria-hidden="true" class="text-neon-pink font-mono text-sm dark:text-pink-300">
				{{ index }}
			</span>

			<span
				aria-hidden="true"
				:class="resolvedAccent"
				class="mt-2 h-1 w-10 shrink-0 rounded-full"
			/>
		</div>

		<h3 class="text-grey-950 dark:text-grey-50 text-lg font-bold">
			{{ title }}
		</h3>

		<p class="text-grey-700 dark:text-grey-300 text-balance">
			{{ description }}
		</p>
	</li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	/**
	 * The item description shown below the heading.
	 */
	description: {
		type: String,
		required: true,
	},
	/**
	 * The two-digit item number shown above the heading.
	 */
	index: {
		type: String,
		required: true,
	},
	/**
	 * The accent name for the item's stripe: "neon-pink", "neon-blue",
	 * "purple-500", or "purple-700".
	 */
	accent: {
		type: String,
		required: true,
	},
	/**
	 * The item heading shown above the description.
	 */
	title: {
		type: String,
		required: true,
	},
});

// The Tailwind classes for each supported item accent.
const accentClasses = {
	"neon-blue": "bg-[var(--color-neon-blue)]",
	"neon-pink": "bg-[var(--color-neon-pink)]",
	"purple-500": "bg-purple-500 dark:bg-purple-400",
	"purple-700": "bg-purple-700 dark:bg-purple-300",
};

// The stripe classes for the item's accent; undefined if the name is unrecognised.
const resolvedAccent = computed(() => accentClasses[props.accent]);
</script>
