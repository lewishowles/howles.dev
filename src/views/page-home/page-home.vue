<template>
	<div class="flex flex-col items-center gap-16 lg:gap-28">
		<page-header />
		<welcome-bento />
		<core-values />
		<about-me />
		<super-cool-projects />
		<page-footer />
	</div>
</template>

<script setup>
import AboutMe from "@/components/about-me/about-me.vue";
import CoreValues from "@/components/core-values/core-values.vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import PageHeader from "@/components/page-header/page-header.vue";
import SuperCoolProjects from "@/components/super-cool-projects/super-cool-projects.vue";
import WelcomeBento from "@/components/welcome-bento/welcome-bento.vue";
</script>
