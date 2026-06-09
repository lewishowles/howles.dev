<template>
	<pill-badge v-bind="{ colour }" class="inline-flex">
		<img
			v-if="type === projectTypes.SKETCH"
			src="@/assets/images/logos/sketch.svg"
			alt=""
			class="size-3"
		/>
		<img
			v-if="type === projectTypes.VSCODE"
			src="@/assets/images/logos/visual-studio-code.svg"
			alt=""
			class="size-3"
		/>

		{{ t(`cool_projects.type.${type}`) }}
	</pill-badge>
</template>

<script setup>
import { computed } from "vue";
import { projectTypes } from "@/components/super-cool-projects/project-types";
import { useI18n } from "vue-i18n";

const props = defineProps({
	/**
	 * The type of project.
	 */
	type: {
		type: String,
		default: null,
	},
});

const { t } = useI18n();

// The colour of the badge, based on project type.
const colour = computed(() => {
	switch (props.type) {
		case projectTypes.LIBRARY:
			return "purple";
		case projectTypes.DESIGN:
			return "orange";
		case projectTypes.PERSONAL:
			return "indigo";
		case projectTypes.SKETCH:
			return "yellow";
		case projectTypes.VSCODE:
			return "blue";
		case projectTypes.RAYCAST:
			return "red";
		default:
			return "grey";
	}
});
</script>
