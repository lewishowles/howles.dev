<template>
	<div class="rounded-2xl border shadow-sm transition-colors dark:bg-grey-950/20 dark:shadow-none" :class="[paddingClasses, borderColourClasses]" data-test="bento-box">
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


// Our border colour, adding a default colour unless it is provided by the user.
const borderColourClasses = computed(() => {
	const classes = attrs.class ? attrs.class.split(" ") : [];
	const hasBorderColour = classes.some(className => className.startsWith("border-"));
	const hasDarkBorderColour = classes.some(className => className.startsWith("dark:border-"));

	const borderClasses = [];

	if (!hasBorderColour) {
		borderClasses.push("border-grey-300");
	}

	if (!hasDarkBorderColour) {
		borderClasses.push("dark:border-transparent");
	}

	return borderClasses;
});
</script>
