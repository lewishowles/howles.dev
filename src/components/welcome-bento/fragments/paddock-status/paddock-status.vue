<template>
	<div class="rounded-2xl border border-grey-200 bg-white p-6 shadow-sm dark:border-transparent dark:bg-black/20 dark:shadow-none">
		<loading-indicator v-show="!isReady && isLoading">
			Checking status
		</loading-indicator>

		<div v-show="isReady">
			<div class="flex gap-4">
				<div class="w-1 rounded-full bg-green-600" />
				<div>
					<div class="flex items-center gap-2 text-green-600">
						<icon-check-circled />
						<span class="text-sm">Secure</span>
					</div>
					<div class="mb-1 text-lg font-semibold text-grey-950">
						Tyrannosaurus Paddock
					</div>
					<pill-badge icon-start="icon-clock">
						Last checked: Today, 05:25
					</pill-badge>
				</div>
			</div>

			<div v-show="!isLoading" class="mb-5 mt-6 w-max">
				<ul class="flex gap-0.5 overflow-hidden rounded">
					<li v-for="status in statuses" :key="status.statusCheckId" v-bind="{ title: status.outcomeLabel }" class="h-7 w-2" :class="{ 'bg-green-600': status.pass, 'bg-red-600': !status.pass }">
						<span class="sr-only">
							{{ status.outcomeLabel }}
						</span>
					</li>
				</ul>
				<div class="mt-1 flex justify-between text-xs text-grey-500">
					<span>{{ startDate }}</span>
					<span>Today</span>
				</div>
			</div>

			<loading-indicator v-show="isLoading" class="mb-11 mt-7 text-sm">
				Checking status
			</loading-indicator>

			<ui-button ref="checkNowButton" class="button--muted text-sm" v-bind="{ iconStart: 'icon-reload', reactive: true }" @click="loadData(true)">
				Check now
			</ui-button>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { firstDefined, isNonEmptyArray, tail } from "@lewishowles/helpers/array";
import { get } from "@lewishowles/helpers/object";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { nanoid } from "nanoid";
import { runComponentMethod } from "@lewishowles/helpers/vue";
import useApi from "@/composables/api";

const { isLoading, isReady, load } = useApi();
// The historical status checks performed on the paddock.
const statuses = ref([]);
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
		const response = await load(dataGenerator, includeSurprise);

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
 * Generate basic sample data for display, as though coming from an API.
 *
 * @param  {boolean}  includeSurprise
 *     Whether to include a surprise in the loaded data.
 */
function dataGenerator(includeSurprise = false) {
	const startingYear = 1990;
	const dataPoints = 34;
	const response = [];

	for (let i = 0; i < dataPoints; i++) {
		const year = startingYear + i;

		response.push({
			statusCheckId: nanoid(),
			pass: year !== 1993,
			year,
		});
	}

	// The surprise is... an active breach!
	if (includeSurprise) {
		tail(response).pass = false;
	}

	return response;
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
