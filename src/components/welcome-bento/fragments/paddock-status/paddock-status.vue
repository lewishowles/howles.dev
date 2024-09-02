<template>
	<div class="relative overflow-hidden rounded-2xl border p-6 shadow-sm dark:border-transparent dark:bg-grey-950/20 dark:shadow-none" :class="{ 'border-grey-300': paddockSecure, 'border-red-300': !paddockSecure }" data-test="paddock-status">
		<loading-indicator v-show="!isReady && isLoading">
			{{ t("paddock_status.loading") }}
		</loading-indicator>

		<div v-show="isReady">
			<div class="flex gap-4">
				<div class="w-1 rounded-full transition-colors" :class="{ 'bg-grey-300 dark:bg-white/20': isLoading, 'bg-green-600 dark:bg-green-300': !isLoading && paddockSecure, 'animate-pulse bg-red-600 dark:bg-red-300': !paddockSecure }" />
				<div>
					<icon-loading v-show="isLoading" class="my-0.5 size-4 animate-spin" />
					<div v-show="!isLoading" class="flex items-center gap-2 transition-colors" :class="{ 'text-green-600 dark:text-green-300': paddockSecure, 'text-red-600 dark:text-red-300': !paddockSecure }">
						<icon-check-circled v-if="paddockSecure" />
						<icon-danger v-else />

						<span class="text-sm">{{ currentStatusDescriptor }}</span>
					</div>
					<div class="mb-1 text-lg font-semibold transition-colors" :class="{ 'text-grey-950 dark:text-grey-50': paddockSecure, 'text-red-600 dark:text-red-300': !paddockSecure }">
						{{ t("paddock_status.title") }}
					</div>
					<pill-badge icon-start="icon-clock">
						{{ t("paddock_status.last_checked", { time: lastRunTime }) }}
					</pill-badge>
				</div>
			</div>

			<div class="mb-5 mt-6">
				<div v-show="!isLoading">
					<ul class="flex gap-0.5 overflow-hidden rounded">
						<li v-for="status in statuses" :key="status.id" v-bind="{ title: status.outcomeLabel }" class="animate-fade-in delay h-7 flex-1 hover:opacity-80" :class="{ 'bg-green-600 dark:bg-green-400': status.pass, 'bg-red-600 dark:bg-red-400': !status.pass }">
							<span class="sr-only">
								{{ status.outcomeLabel }}
							</span>
						</li>
					</ul>
					<div class="mt-1 flex justify-between text-xs text-grey-500 dark:text-grey-400">
						<span>{{ startDate }}</span>
						<span>{{ t("paddock_status.today") }}</span>
					</div>
				</div>

				<loading-indicator v-show="isLoading" class="h-12 text-sm">
					{{ t("paddock_status.loading") }}
				</loading-indicator>
			</div>

			<ui-button ref="checkNowButton" class="button--muted text-sm" v-bind="{ iconStart: 'icon-reload', reactive: true }" @click="loadData(true)">
				{{ t("paddock_status.check_now") }}
			</ui-button>

			<div v-if="!paddockSecure" class="animate-fade-in-up warning-tape absolute inset-x-0 bottom-0 h-2" />
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { firstDefined, isNonEmptyArray, tail } from "@lewishowles/helpers/array";
import { get } from "@lewishowles/helpers/object";
import { getApiUrl } from "@/api";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { runComponentMethod } from "@lewishowles/helpers/vue";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/use-api";

const { t } = useI18n();
const { isLoading, isReady, load, lastRunTime } = useApi();
// The historical status checks performed on the paddock.
const statuses = ref([]);
// The current (most recent) status.
const currentStatus = computed(() => tail(statuses.value));
// Whether the paddock is currently secure, based on the most recent check. If
// we're currently loading, we'll assume secure for now.
const paddockSecure = computed(() => isLoading.value || get(currentStatus.value, "pass"));
// A simple descriptor for the current status.
const currentStatusDescriptor = computed(() => (paddockSecure.value ? t("paddock_status.status.secure") : t("paddock_status.status.secure")));
// The check now button, which allows us to reset it when loading is complete.
const checkNowButton = ref(null);

// The start date for the status responses.
const startDate = computed(() => {
	const earliestStatus = firstDefined(statuses.value);

	return get(earliestStatus, "year");
});

loadData();

/**
 * Load the historical status checks for the paddock. In this example, we
 * simulate an API call and reasonable API response for this kind of data.
 *
 * @param  {boolean}  includeSurprise
 *     Whether to include a surprise in the loaded data.
 */
async function loadData(includeSurprise = false) {
	try {
		let file = "default";

		if (includeSurprise) {
			file = "surprise";
		}

		const response = await load(getApiUrl("paddock-status", file));

		if (!isNonEmptyArray(response)) {
			throw new Error(`Expected non-empty array <response>, received ${getFriendlyDisplay(response)}`);
		}

		statuses.value = augmentResponse(response);

		runComponentMethod(checkNowButton.value, "reset");
	} catch (error) {
		console.log("paddock-status[loadData]", error);
	}
}

/**
 * Augment the response from the API, adding information that will be useful for
 * the template.
 */
function augmentResponse(response) {
	if (!isNonEmptyArray(response)) {
		return [];
	}

	return response.map(status => {
		// Provide a representative label that can be used for accessibility.
		const outcome = status.pass ? "Secure" : "Security breach";

		status.outcomeLabel = `${status.year}: ${outcome}`;

		return status;
	});
}
</script>

<style>
.warning-tape {
	background: repeating-linear-gradient(
		-45deg,
		theme('colors.yellow.400'),
		theme('colors.yellow.400') 15px,
		theme('colors.grey.950') 15px,
		theme('colors.grey.950') 30px
	);
}
</style>
