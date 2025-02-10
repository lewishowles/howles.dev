<template>
	<bento-box class="h-full" data-test="staff-duties">
		<h2 class="mb-1 text-lg font-semibold text-grey-950 dark:text-grey-50">
			{{ t("staff_duties.title") }}
		</h2>

		<p class="mb-6">
			{{ t("staff_duties.intro") }}
		</p>

		<staff-duties-skeleton v-show="isLoading">
			{{ t("staff_duties.loading") }}
		</staff-duties-skeleton>

		<donut-chart v-show="!isLoading && haveData" v-bind="{ values: figures, colourful: true }" class="animate-fade-in mx-auto size-52" data-test="staff-duties-chart" />

		<dl v-show="!isLoading && haveData" class="mx-auto mt-6 max-w-72 divide-y divide-grey-200 text-xs dark:divide-white/30" data-test="staff-duties-key">
			<template v-for="(duty, index) in duties" :key="duty.category">
				<div class="flex items-center py-1">
					<dt class="flex items-center gap-1.5">
						<div class="size-3 rounded-sm bg-current" :class="getNextColour(index, brightColours)" />

						{{ t(`staff_duties.categories.${duty.category}`) }}
					</dt>
					<dd class="ms-auto font-semibold">
						{{ duty.percentage }}
					</dd>
				</div>
			</template>
		</dl>
	</bento-box>
</template>

<script setup>
import { brightColours, getNextColour } from "@lewishowles/helpers/chart";
import { computed, ref, watch } from "vue";
import { get } from "@lewishowles/helpers/object";
import { getApiUrl } from "@/api";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { isNonEmptyArray } from "@lewishowles/helpers/array";
import { isNumber } from "@lewishowles/helpers/number";
import { useI18n } from "vue-i18n";
import { useSecurityStore } from "@/stores/security";
import useApi from "@/composables/use-api";

import BentoBox from "@/components/welcome-bento/fragments/bento-box/bento-box.vue";
import StaffDutiesSkeleton from "./fragments/staff-duties-skeleton.vue";

const { t } = useI18n();
const { load, isLoading } = useApi();
const securityStore = useSecurityStore();
// The task data to display.
const data = ref([]);

// The figures to provide to the chart.
const figures = computed(() => {
	if (!isNonEmptyArray(data.value)) {
		return [];
	}

	return data.value.map(duty => get(duty, "total_time_logged"));
});

// Enhanced data, especially helpful for the chart key.
const duties = computed(() => {
	if (!haveData.value) {
		return [];
	}

	return data.value.reduce((accumulator, duty) => {
		const timeLogged = get(duty, "total_time_logged");

		if (!isNumber(timeLogged)) {
			return;
		}

		const timePercentage = timeLogged / totalTimeLogged.value;

		accumulator.push({
			...duty,
			percentage: numberFormatter.format(timePercentage),
		});

		return accumulator;
	}, []);
});

// Whether we have any data to display.
const haveData = computed(() => isNonEmptyArray(figures.value));

// The total time logged over all duties.
const totalTimeLogged = computed(() => {
	if (!haveData.value) {
		return 0;
	}

	if (!figures.value.every(figure => isNumber(figure))) {
		return 0;
	}

	return figures.value.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
});

// A standard formatter for our percentage values.
const numberFormatter = new Intl.NumberFormat(navigator.language, {
	style: "percent",
	maximumFractionDigits: 0,
});

loadData();

watch(() => securityStore.secure, () => {
	if (securityStore.secure === false) {
		loadData("duties-breach");
	}
});

/**
 * Load the most recent staff duty analytics.
 *
 * @param  {string}  file
 *     The file from which to load data.
 */
async function loadData(file = "duties") {
	try {
		const response = await load(getApiUrl("analytics", file));

		if (!isNonEmptyArray(response)) {
			throw new Error(`Expected non-empty array <response>, received ${getFriendlyDisplay(response)}`);
		}

		data.value = response;
	} catch {
		console.log("staff-duties[loadData]: Unable to load data.");
	}
}
</script>
