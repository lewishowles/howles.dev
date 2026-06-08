<template>
	<div
		class="grid place-items-center text-purple-500 [grid-template-areas:'stack'] dark:text-white"
	>
		<component :is="icon" class="hidden size-5 opacity-20 [grid-area:stack] dark:block" />
		<component :is="icon" class="size-5 [grid-area:stack] dark:mix-blend-overlay" />
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
