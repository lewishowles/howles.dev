<template>
	<bento-box id="paddock-status" class="relative flex h-full flex-col justify-center overflow-hidden" :class="{ 'border-grey-300': paddockSecure, 'border-red-300': !paddockSecure }" data-test="paddock-status">
		<paddock-status-skeleton v-show="isLoading" class="my-auto">
			{{ t("paddock_status.loading") }}
		</paddock-status-skeleton>

		<div v-show="isReady">
			<div v-show="!isLoading" class="flex gap-4">
				<div class="w-1 rounded-full transition-colors" :class="{ 'bg-grey-300 dark:bg-white/20': isLoading, 'bg-green-600 dark:bg-green-400': !isLoading && paddockSecure, 'animate-pulse bg-red-600 dark:bg-red-300': !paddockSecure }" />
				<div>
					<div class="flex items-center gap-2 transition-colors" :class="{ 'text-green-600 dark:text-green-400': paddockSecure, 'text-red-600 dark:text-red-300': !paddockSecure, 'invisible': isLoading }">
						<icon-check-circled v-if="paddockSecure" />
						<icon-danger v-else />

						<span class="text-sm" data-test="paddock-status-status">{{ currentStatusDescriptor }}</span>
					</div>
					<div class="mb-1 text-lg font-semibold transition-colors" :class="{ 'text-grey-950 dark:text-grey-50': paddockSecure, 'text-red-600 dark:text-red-300': !paddockSecure }">
						{{ t("paddock_status.title") }}
					</div>
					<pill-badge icon-start="icon-clock">
						{{ t("paddock_status.last_checked", { time: lastRunTime }) }}
					</pill-badge>
				</div>
			</div>

			<div v-show="!isLoading" class="mb-5 mt-6">
				<div v-show="haveStatuses">
					<ul class="flex gap-0.5 overflow-hidden rounded-sm" data-test="paddock-status-markers">
						<li v-for="status in statuses" :key="status.id" v-bind="{ title: status.outcomeLabel }" class="animate-fade-in delay-micro flex h-7 flex-1 items-end hover:opacity-80" :class="{ 'bg-green-600 dark:bg-green-400': status.pass, 'bg-red-600 dark:bg-red-400': !status.pass }">
							<div class="h-1/3 w-full bg-grey-950 opacity-20" />
							<span class="sr-only">
								{{ status.outcomeLabel }}
							</span>
						</li>
					</ul>
					<div class="mt-1 flex justify-between text-xs text-grey-500 dark:text-grey-50/60">
						<span>{{ startDate }}</span>
						<span>{{ t("paddock_status.today") }}</span>
					</div>
				</div>
			</div>

			<ui-button ref="checkNowButton" class="button--muted text-sm" v-bind="{ iconStart: 'icon-reload', reactive: true }" @click="loadData('surprise')">
				{{ t("paddock_status.check_now") }}
			</ui-button>

			<div v-if="!paddockSecure" class="animate-fade-in-up warning-tape absolute inset-x-0 bottom-0 h-2" />
		</div>
	</bento-box>
</template>

<script setup>
import { computed, ref, useTemplateRef, watch } from "vue";
import { firstDefined, isNonEmptyArray, tail } from "@lewishowles/helpers/array";
import { get } from "@lewishowles/helpers/object";
import { getApiUrl } from "@/api";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { runComponentMethod } from "@lewishowles/helpers/vue";
import { useI18n } from "vue-i18n";
import { useSecurityStore } from "@/stores/security";
import useApi from "@/composables/use-api";

import BentoBox from "@/components/welcome-bento/fragments/bento-box/bento-box.vue";
import PaddockStatusSkeleton from "./fragments/paddock-status-skeleton.vue";

const { t } = useI18n();
const { isLoading, isReady, load, lastRunTime } = useApi();
const securityStore = useSecurityStore();
// The historical status checks performed on the paddock.
const statuses = ref([]);
// Whether any statuses are present.
const haveStatuses = computed(() => isNonEmptyArray(statuses.value));
// The current (most recent) status.
const currentStatus = computed(() => tail(statuses.value));
// Whether the paddock is currently secure, based on the most recent check. If
// we're currently loading, we'll assume secure for now.
const paddockSecure = computed(() => isLoading.value || get(currentStatus.value, "pass"));

// A simple descriptor for the current status.
const currentStatusDescriptor = computed(() => {
	if (isReady.value && haveStatuses.value) {
		if (paddockSecure.value) {
			return t("paddock_status.status.secure");
		}

		return t("paddock_status.status.breach");
	}

	return t("paddock_status.status.unknown");
});

// The check now button, which allows us to reset it when loading is complete.
const checkNowButton = useTemplateRef("checkNowButton");

// The start date for the status responses.
const startDate = computed(() => {
	const earliestStatus = firstDefined(statuses.value);

	return get(earliestStatus, "year");
});

loadData();

/**
 * When detecting that the paddock is insecure, update our security store.
 */
watch(paddockSecure, () => {
	if (!isReady.value) {
		return;
	}

	securityStore.updateStatus(paddockSecure.value);
});

/**
 * Load the historical status checks for the paddock. In this example, we
 * simulate an API call and reasonable API response for this kind of data.
 *
 * @param  {string}  file
 *     The file from which to load data.
 */
async function loadData(file = "default") {
	try {
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
		const outcome = status.pass ? t("paddock_status.status.secure") : t("paddock_status.status.breach");

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
