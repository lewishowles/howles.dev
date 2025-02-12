<template>
	<div class="grid place-items-center text-purple-500 dark:text-white [grid-template-areas:'stack']">
		<component :is="icon" class="size-5 [grid-area:stack] opacity-20 hidden dark:block" />
		<component :is="icon" class="size-5 dark:mix-blend-overlay [grid-area:stack]" />
	</div>
</template>

<script setup>
/**
 * By using a combination of opacity and blend modes, `blended-icon` creates a
 * version of a given icon that subtly blends into the background colour.
 */
defineProps({
	/**
	 * The icon to display
	 */
	icon: {
		type: String,
		required: true,
	},
});
</script>
