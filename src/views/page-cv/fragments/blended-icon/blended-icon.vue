<template>
	<div
		class="grid place-items-center text-purple-500 [grid-template-areas:'stack'] dark:text-white"
	>
		<component :is="resolvedIcon" class="hidden size-5 opacity-20 [grid-area:stack] dark:block" />
		<component :is="resolvedIcon" class="size-5 [grid-area:stack] dark:mix-blend-overlay" />
	</div>
</template>

<script setup>
import { computed } from "vue";
import { resolveIconComponent } from "@/utilities/resolve-icon-component";

/**
 * By using a combination of opacity and blend modes, `blended-icon` creates a
 * version of a given icon that subtly blends into the background colour.
 */
const props = defineProps({
	/**
	 * The icon to display
	 */
	icon: {
		type: String,
		required: true,
	},
});

// The component represented by the provided icon name.
const resolvedIcon = computed(() => resolveIconComponent(props.icon));
</script>
