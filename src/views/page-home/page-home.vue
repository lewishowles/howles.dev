<template>
	<div class="flex flex-col items-center gap-16 lg:gap-28">
		<layout-header />

		<main id="main" class="flex flex-col items-center gap-16 lg:gap-28 outline-0" tabindex="-1">
			<welcome-bento />
			<core-values />
			<about-me />
			<super-cool-projects />
		</main>

		<layout-footer />
	</div>
</template>

<script setup>
import AboutMe from "@/components/about-me/about-me.vue";
import CoreValues from "@/components/core-values/core-values.vue";
import LayoutFooter from "@/components/layout-footer/layout-footer.vue";
import LayoutHeader from "@/components/layout-header/layout-header.vue";
import SuperCoolProjects from "@/components/super-cool-projects/super-cool-projects.vue";
import WelcomeBento from "@/components/welcome-bento/welcome-bento.vue";
</script>
