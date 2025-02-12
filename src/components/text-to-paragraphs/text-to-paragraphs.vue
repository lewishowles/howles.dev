<template>
	<div class="flex flex-col gap-6">
		<p v-for="(paragraph, index) in paragraphs" :key="index">
			{{ paragraph }}
		</p>
	</div>
</template>

<script setup>
/**
 * `text-to-paragraphs` takes provided text and splits it into paragraphs, based
 * on a double newline `\n\n`.
 */
import { computed } from "vue";
import { isNonEmptyString } from "@lewishowles/helpers/string";

const props = defineProps({
	/**
	 * The text to split.
	 */
	text: {
		type: String,
		default: null,
	},
});

// The provided text, split into an array, each item containing a paragraph.
const paragraphs = computed(() => {
	if (!isNonEmptyString(props.text)) {
		return [];
	}

	return props.text.split("\n\n");
});
</script>
