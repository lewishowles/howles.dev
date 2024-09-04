<template>
	<div class="group relative flex cursor-pointer items-center gap-4 rounded-2xl border border-grey-300 p-6 pr-12 shadow transition-colors hocus:bg-gradient-to-b hocus:from-white hocus:to-grey-100 dark:border-transparent dark:bg-grey-950/20 dark:shadow-none dark:hocus:bg-grey-950/30 dark:hocus:bg-none" data-test="headline-users" tabindex="0">
		<div class="size-14 rounded-full bg-gradient-to-br from-pink-700 to-purple-800 p-4">
			<icon-user class="size-6 text-white" />
		</div>

		<div class="flex flex-col">
			<span class="text-grey-500 dark:text-grey-400">
				{{ t("headline_users.title") }}
			</span>

			<div class="flex items-center gap-4">
				<span v-show="!isLoading" class="text-3xl font-bold text-grey-950 dark:text-grey-50" data-test="headline-users-figure">
					<template v-if="currentPeriod">
						{{ currentPeriod }}
					</template>
					<template v-else>
						{{ t("headline_users.error") }}
					</template>
				</span>

				<loading-indicator v-show="isLoading" class="my-1.5 text-2xl" />

				<pill-badge v-if="comparison" v-bind="{ colour: 'green', iconStart: 'icon-arrow-up' }">
					{{ comparison }}
				</pill-badge>
			</div>
		</div>

		<icon-chevron-right class="absolute end-0 top-1/2 mr-6 size-5 -translate-y-1/2 text-grey-400 opacity-0 transition-opacity group-hocus:opacity-100" data-test="headline-users-chevron" />
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { get, isNonEmptyObject } from "@lewishowles/helpers/object";
import { getApiUrl } from "@/api";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { isNonEmptyString } from "@lewishowles/helpers/string";
import { isNumber } from "@lewishowles/helpers/number";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/use-api";

const { t } = useI18n();
const { load, isLoading } = useApi();

// The statistics as loaded from the API.
const statistics = ref(null);
// The current period user count.
const currentPeriod = computed(() => {
	const figure = get(statistics.value, "current_period.user_count");

	if (!isNumber(figure)) {
		return null;
	}

	return formatNumber(figure, "decimal");
});

// The percentage comparison between this period and last.
const comparison = computed(() => {
	const current = get(statistics.value, "current_period.user_count");
	const previous = get(statistics.value, "previous_period.user_count");

	if (!isNumber(current) || !isNumber(previous) || previous === 0) {
		return null;
	}

	const difference = current - previous;
	const percentageDifference = (difference / previous) * 100;

	return formatNumber(percentageDifference / 100, "percent");
});

loadData();

/**
 * Load user data
 */
async function loadData() {
	try {
		const response = await load(getApiUrl("analytics", "users"));

		if (!isNonEmptyObject(response)) {
			throw new Error(`Expected non-empty object <response>, received ${getFriendlyDisplay(response)}`);
		}

		statistics.value = response;
	} catch (error) {
		console.log("headline-users[loadData]", error);
	}
}

/**
 * Format a number using the browser's current language.
 *
 * @param  {number}  figure
 *     The figure to format
 * @param  {string}  format
 *     The number format - one of "percent", "decimal" or "currency"
 */
function formatNumber(figure, format) {
	if (!isNumber(figure)) {
		return null;
	}

	if (!isNonEmptyString(format) || !["percent", "decimal", "currency"].includes(format)) {
		format = "decimal";
	}

	const formatter = new Intl.NumberFormat(navigator.language, {
		style: format,
		maximumFractionDigits: 0,
	});

	return formatter.format(figure);
}
</script>
