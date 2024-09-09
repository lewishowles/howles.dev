<template>
	<li class="rounded-3xl bg-white p-6 pb-4 ring-1 ring-inset ring-grey-300 dark:bg-black/20 dark:ring-0">
		<component :is="icon" class="mb-3 size-8 text-purple-500 dark:text-purple-300" />

		<h3 class="mb-1 text-lg font-bold text-grey-950 dark:text-grey-50">
			<slot name="title" />
		</h3>

		<p>
			<slot />
		</p>
	</li>
</template>

<script setup>
defineProps({
	/**
	 * The icon to display for this value.
	 */
	icon: {
		type: String,
		required: true,
	},
});
</script>
