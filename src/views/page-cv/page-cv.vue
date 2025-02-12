<template>
	<div class="flex flex-col items-center gap-16 lg:gap-28">
		<layout-header v-bind="{ includeLookingForWork: false }" />
		<get-in-touch />
	</div>
</template>

<script setup>
import LayoutHeader from "@/components/layout-header/layout-header.vue";
import GetInTouch from "./fragments/get-in-touch/get-in-touch.vue";
</script>
