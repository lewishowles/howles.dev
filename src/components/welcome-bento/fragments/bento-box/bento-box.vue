<template>
	<div class="rounded-2xl border border-grey-300 shadow dark:border-transparent dark:bg-grey-950/20 dark:shadow-none" :class="paddingClasses" data-test="bento-box">
		<slot />
	</div>
</template>

<script setup>
import { computed, useAttrs } from "vue";

const attrs = useAttrs();

// Our padding classes for the box, adding default padding unless it is provided
// by the user.
const paddingClasses = computed(() => {
	const classes = attrs.class ? attrs.class.split(" ") : [];
	const hasHorizontalPadding = classes.some(className => className.startsWith("p-") || className.startsWith("px-"));
	const hasVerticalPadding = classes.some(className => className.startsWith("p-") || className.startsWith("py-"));

	const paddingClasses = [];

	if (!hasHorizontalPadding) {
		paddingClasses.push("px-6");
	}

	if (!hasVerticalPadding) {
		paddingClasses.push("py-5");
	}

	return paddingClasses;
});
</script>
