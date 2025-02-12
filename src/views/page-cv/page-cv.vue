<template>
	<div class="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 pb-10 md:pb-20 lg:gap-28">
		<div class="flex flex-col gap-16">
			<layout-header v-bind="{ includeLookingForWork: false }" />

			<get-in-touch />
		</div>

		<div class="grid grid-cols-2 gap-12">
			<div class="flex flex-col gap-10">
				<person-overview />
			</div>
		</div>
	</div>
</template>

<script setup>
import GetInTouch from "./fragments/get-in-touch/get-in-touch.vue";
import LayoutHeader from "@/components/layout-header/layout-header.vue";
import PersonOverview from "./fragments/person-overview/person-overview.vue";
</script>
