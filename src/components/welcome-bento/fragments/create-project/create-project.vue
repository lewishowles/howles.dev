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

		<transition
			enter-active-class="transition ease-out duration-500"
			enter-from-class="opacity-0 transform -translate-y-4"
			enter-to-class="opacity-100 transform translate-y-0"
			leave-active-class="transition ease-in duration-500"
			leave-from-class="opacity-100 transform translate-y-0"
			leave-to-class="opacity-0 transform translate-y-4"
		>
			<div v-show="showingSuccessMessage" class="absolute inset-x-0 top-0 mx-1 mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
				<icon-check-circled class="size-6" />

				{{ t("create_project.form.success") }}
			</div>
		</transition>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { runComponentMethod } from "@lewishowles/helpers/vue";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/use-api";

const { t, tm } = useI18n();
const { delay } = useApi();
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

// Whether to display a success message.
const showingSuccessMessage = ref(false);

/**
 * Simulate a new project being created.
 */
async function createProject() {
	try {
		await delay(1000);

		runComponentMethod(submitButton.value, "reset");

		showSuccessMessage();
	} catch {
		console.log("create-project[createProject]: Failed to create project");
	}
}

/**
 * Show a sample success message and reset the form.
 */
async function showSuccessMessage() {
	showingSuccessMessage.value = true;

	setTimeout(() => {
		showingSuccessMessage.value = false;

		resetForm();
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
