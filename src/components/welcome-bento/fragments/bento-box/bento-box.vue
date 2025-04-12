<template>
	<div class="bento-border flex h-full flex-col rounded-2xl p-px">
		<div class="grow rounded-2xl border border-grey-300 hover:border-transparent focus-within:border-transparent bg-white shadow-sm dark:border-transparent dark:bg-[#380A32] dark:shadow-none" :class="[attrs.class, paddingClasses]" data-test="bento-box">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { computed, useAttrs } from "vue";

defineOptions({
	inheritAttrs: false,
});

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

<style>
.bento-border {
	--angle: 0deg;

	&:hover, &:focus-within {
		background-image: conic-gradient(
			from var(--angle),
			var(--color-grey-200) 10%,
			var(--color-pink-600),
			var(--color-grey-200) 20%
		);

		animation: 6s rotate linear infinite;

		&:where(.dark, .dark *) {
			background-image: conic-gradient(
				from var(--angle),
				rgba(0, 0, 0, 0) 10%,
				var(--color-pink-300),
				rgba(0, 0, 0, 0) 20%
			);
		}
	}
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
	syntax: '<angle>';
	initial-value: 0deg;
	inherits: false;
}
</style>
