<template>
	<theme-selector />

	<div class="page-header flex w-full flex-col items-center bg-linear-to-b from-grey-50 pt-16 dark:bg-none" data-test="page-header">
		<howles-logo />

		<looking-for-work v-if="includeLookingForWork" class="mt-12 lg:mt-8" />
	</div>
</template>

<script setup>
import HowlesLogo from "./fragments/howles-logo/howles-logo.vue";
import LookingForWork from "./fragments/looking-for-work/looking-for-work.vue";
import ThemeSelector from "@/components/theme-selector/theme-selector.vue";

defineProps({
	/**
	 * Whether to include the "looking for work" banner.
	 */
	includeLookingForWork: {
		type: Boolean,
		default: true,
	},
});
</script>

<style>
@reference "../../assets/css/main.css";

.page-header:where(.dark, .dark *),
.glasses:where(.dark, .dark *) {
	position: relative;

	&:before {
		background: radial-gradient(ellipse at center, var(--color-neon-pink), transparent 70%);
		content: "";
		left: 50%;
		max-width: 100%;
		opacity: 0.5;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}
}

.glasses:where(.dark, .dark *) {
	&:before {
		height: 8rem;
		width: 16rem;
	}
}

.page-header:where(.dark, .dark *) {
	&:before {
		height: 20rem;
		top: 0;
		width: 50rem;
	}
}
</style>
