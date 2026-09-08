<template>
	<content-section>
		<template #eyebrow>
			{{ t("help_with.pre_title") }}
		</template>

		<template #title>
			<i18n-t keypath="help_with.title" tag="span">
				<template #use>
					<span class="text-neon-pink">use</span>
				</template>

				<template #build>
					<span class="text-neon-pink">build</span>
				</template>
			</i18n-t>
		</template>

		<template #intro>
			{{ t("help_with.intro") }}
		</template>

		<ul class="grid gap-1 lg:grid-cols-2">
			<help-with-item
				v-for="item in helpWithItems"
				:key="item.key"
				:class="item.classes"
				v-bind="{
					description: t(`help_with.items.${item.key}.description`),
					index: item.index,
					accent: item.accent,
					title: t(`help_with.items.${item.key}.title`),
				}"
			/>
		</ul>
	</content-section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// The four help areas with their accent names, kept in display order.
const helpWithItems = [
	{
		key: "accessible_front_end_builds",
		index: "01",
		accent: "neon-pink",
		classes: "rounded-t-2xl lg:rounded-tr-none",
	},
	{
		key: "design_systems_and_reusable_components",
		index: "02",
		accent: "neon-blue",
		classes: "lg:rounded-tr-2xl",
	},
	{
		key: "front_end_tooling_and_developer_experience",
		index: "03",
		accent: "purple-700",
		classes: "lg:rounded-bl-2xl",
	},
	{
		key: "design_and_front_end_together",
		index: "04",
		accent: "purple-500",
		classes: "rounded-b-2xl lg:rounded-bl-none",
	},
];
</script>
