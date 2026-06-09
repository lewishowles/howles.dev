<template>
	<pill-badge v-bind="{ colour }" class="inline-flex">
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
		case projectTypes.CONFIGURATION:
			return "green";
		default:
			return "grey";
	}
});
</script>
