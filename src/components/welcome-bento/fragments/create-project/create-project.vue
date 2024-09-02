<template>
	<div class="relative rounded-2xl border border-grey-300 px-6 py-5 shadow-sm dark:border-transparent dark:bg-black/20 dark:shadow-none">
		<h2 class="mb-1 text-lg font-semibold">
			{{ t("create_project.title") }}
		</h2>

		<p class="mb-6">
			{{ t("create_project.intro") }}
		</p>

		<form-layout>
			<form-input v-model="project.name">
				{{ t("create_project.form.project_name.label") }}

				<template #help>
					{{ t("create_project.form.project_name.help") }}
				</template>
			</form-input>

			<radio-group v-model="project.type" v-bind="{ options: tm('create_project.form.project_type.options'), inline: true }">
				{{ t("create_project.form.project_type.label") }}

				<template #introduction>
					{{ t("create_project.form.project_type.introduction") }}
				</template>
			</radio-group>

			<form-actions class="inset-well bg-grey-50">
				<ui-button ref="submitButton" v-bind="{ reactive: true }" class="button--primary" @click="createProject">
					{{ t("create_project.form.submit") }}
				</ui-button>
			</form-actions>
		</form-layout>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();
// A reference to the submit button, allowing us to reset it after project
// creation or on error.
const submitButton = ref(null);
// The default option for type.
const defaultType = ref("blank");

// The current values of the form.
const project = reactive({
	name: null,
	type: defaultType.value,
});

/**
 * Simulate a new project being created.
 */
function createProject() {

}
</script>
