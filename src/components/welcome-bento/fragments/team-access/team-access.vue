<template>
	<bento-box data-test="team-access">
		<h2 class="mb-1 text-lg font-semibold text-grey-950 dark:text-grey-50">
			{{ t("team_access.title") }}
		</h2>

		<p class="mb-6">
			{{ t("team_access.intro") }}
		</p>

		<loading-indicator v-show="isLoading" class="py-2.5">
			{{ t("team_access.loading") }}
		</loading-indicator>

		<div v-show="!isLoading" v-if="isReady && !haveUsers" class="text-grey-500 dark:text-grey-400" data-test="team-access-none-found">
			{{ t("team_access.no_users") }}
		</div>

		<ul v-show="!isLoading" v-if="isReady && haveUsers">
			<li v-for="user in users" :key="user.id" class="flex items-center gap-2" data-test="team-access-user">
				<div class="flex size-10 items-center justify-center rounded-full border border-purple-200 bg-purple-50 font-bold text-purple-800">
					{{ user.initials }}
				</div>
				<div class="flex flex-col">
					<span class="font-semibold text-grey-950 dark:text-grey-50">
						{{ user.name }}
					</span>
					<span class="text-grey-500 dark:text-grey-400">
						{{ user.email }}
					</span>
				</div>
				<ui-button v-bind="{ iconEnd: 'icon-chevron-down' }" class="button--muted ms-auto">
					{{ t(`team_access.users.roles.${user.role}`) }}
				</ui-button>
			</li>
		</ul>
	</bento-box>
</template>

<script setup>
import { computed, ref } from "vue";
import { getApiUrl } from "@/api";
import { getFriendlyDisplay } from "@lewishowles/helpers/general";
import { isNonEmptyArray } from "@lewishowles/helpers/array";
import { isNonEmptyObject } from "@lewishowles/helpers/object";
import { isNonEmptyString } from "@lewishowles/helpers/string";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/use-api";

import BentoBox from "@/components/welcome-bento/fragments/bento-box/bento-box.vue";

const { t } = useI18n();
const { isLoading, isReady, load } = useApi();
// Our user data, as provided by the API.
const userData = ref(null);

// Our augmented user data for display.
const users = computed(() => {
	if (!isNonEmptyArray(userData.value)) {
		return [];
	}

	return userData.value.reduce((users, user) => {
		if (!isNonEmptyObject(user)) {
			return;
		}

		if (!isNonEmptyString(user.name)) {
			user.name = t("team_access.users.unknown");
		}

		user.initials = user.name.split(" ").map(word => word.charAt(0).toUpperCase()).join("");

		users.push(user);

		return users;
	}, []);
});

// Whether we have any users to display.
const haveUsers = computed(() => isNonEmptyArray(users.value));

loadData();

/**
 * Load the historical status checks for the paddock. In this example, we
 * simulate an API call and reasonable API response for this kind of data.
 *
 * @param  {string}  file
 *     The file from which to load data.
 */
async function loadData() {
	try {
		const response = await load(getApiUrl("users"));

		if (!isNonEmptyArray(response)) {
			throw new Error(`Expected non-empty array <response>, received ${getFriendlyDisplay(response)}`);
		}

		userData.value = response;
	} catch (error) {
		console.log("paddock-status[loadData]", error);
	}
}
</script>
