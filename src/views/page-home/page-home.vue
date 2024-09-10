<template>
	<div class="flex flex-col items-center gap-16 lg:gap-28">
		<page-header />
		<welcome-bento />
		<core-values />
		<about-me />
	</div>
</template>

<script setup>
import AboutMe from "@/components/about-me/about-me.vue";
import CoreValues from "@/components/core-values/core-values.vue";
import PageHeader from "@/components/page-header/page-header.vue";
import WelcomeBento from "@/components/welcome-bento/welcome-bento.vue";
</script>
