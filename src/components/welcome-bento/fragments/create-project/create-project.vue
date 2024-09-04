<template>
	<bento-box class="relative" data-test="create-project">
		<h2 class="mb-1 text-lg font-semibold text-grey-950 dark:text-grey-50">
			{{ t("create_project.title") }}
		</h2>

		<p class="mb-6">
			{{ t("create_project.intro") }}
		</p>

		<form-layout data-test="create-project-form">
			<form-input ref="projectNameInput" v-model="project.name" v-bind="{ inputAttributes: { required: true } }">
				{{ t("create_project.form.project_name.label") }}

				<template #help>
					{{ t("create_project.form.project_name.help") }}
				</template>

				<template #error>
					{{ errorMessages.name }}
				</template>
			</form-input>

			<radio-group v-model="project.type" v-bind="{ options: tm('create_project.form.project_type.options'), inline: true }">
				{{ t("create_project.form.project_type.label") }}

				<template #introduction>
					{{ t("create_project.form.project_type.introduction") }}
				</template>
			</radio-group>

			<form-actions class="inset-well bg-grey-50 dark:bg-grey-950/30">
				<ui-button ref="submitButton" v-bind="{ reactive: true }" class="button--primary" @click="createProject">
					{{ t("create_project.form.submit") }}
				</ui-button>
			</form-actions>
		</form-layout>

		<transition
			enter-active-class="transition ease-out duration-500"
			enter-from-class="opacity-0 transform -translate-y-4"
			enter-to-class="opacity-100 transform translate-y-0"
			leave-active-class="transition ease-in duration-500"
			leave-from-class="opacity-100 transform translate-y-0"
			leave-to-class="opacity-0 transform translate-y-4"
		>
			<div v-show="showingSuccessMessage" class="absolute inset-x-0 top-0 mx-1 mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white" data-test="create-project-success">
				<icon-check-circled class="size-6" />

				{{ t("create_project.form.success") }}
			</div>
		</transition>
	</bento-box>
</template>

<script setup>
import { isNonEmptyString } from "@lewishowles/helpers/string";
import { reactive, ref, useTemplateRef } from "vue";
import { runComponentMethod } from "@lewishowles/helpers/vue";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/use-api";

import BentoBox from "@/components/welcome-bento/fragments/bento-box/bento-box.vue";

const { t, tm } = useI18n();
const { delay } = useApi();
// A reference to the submit button, allowing us to reset it after project
// creation or on error.
const submitButton = useTemplateRef("submitButton");
// The default option for type.
const defaultType = ref("blank");
// A reference to the project name field, allowing us to focus on it if an error
// occurs.
const projectNameInput = useTemplateRef("projectNameInput");

// The current values of the form.
const project = reactive({
	name: null,
	type: defaultType.value,
});

// Any error messages to display to the user.
const errorMessages = reactive({
	name: null,
});

// Whether to display a success message.
const showingSuccessMessage = ref(false);

/**
 * Simulate a new project being created.
 */
async function createProject() {
	try {
		const isValid = validateForm();

		if (!isValid) {
			return;
		}

		await delay(1000);

		showSuccessMessage();
	} catch {
		console.log("create-project[createProject]: Failed to create project");
	} finally {
		runComponentMethod(submitButton.value, "reset");
	}
}

/**
 * Validate our form. In a more complete project a `form-wrapper` component
 * would handle this for us based on validation criteria applied to the
 * fields.
 */
function validateForm() {
	// Reset any previous validation.
	errorMessages.name = null;

	let isValid = true;

	if (!isNonEmptyString(project.name)) {
		errorMessages.name = t("create_project.form.project_name.error.empty");

		runComponentMethod(projectNameInput.value, "triggerFocus");

		isValid = false;
	}

	return isValid;
}

/**
 * Show a sample success message and reset the form.
 */
async function showSuccessMessage() {
	resetForm();

	showingSuccessMessage.value = true;

	setTimeout(() => {
		showingSuccessMessage.value = false;
	}, 2000);
}

/**
 * Reset our form to default values.
 */
function resetForm() {
	project.name = null;
	project.type = defaultType.value;
}
</script>
