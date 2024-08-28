<template>
	<theme-selector />

	<div class="flex flex-col items-center bg-gradient-to-b from-grey-50 pt-16 dark:bg-none" data-test="page-header">
		<img src="@/assets/images/glasses/light.svg" width="256" height="108" />

		<h1 class="text-center text-[5rem] font-extrabold leading-none text-grey-950">
			Lewis Howles
		</h1>

		<div class="flex items-center gap-4 text-xl text-blue-800">
			<div class="h-px w-10 bg-current" />
			<span class="font-mono">&lt;</span>
			<span class="font-extralight">Versatile UI/UX Developer, Designer & Leader</span>
			<span class="font-mono">/&gt;</span>
			<div class="h-px w-10 bg-current" />
		</div>

		<div class="mt-8 w-full max-w-5xl rounded-full border border-grey-200 p-1">
			<div class="flex items-center gap-4 rounded-full border-purple-200 bg-purple-50 px-6 py-5 text-purple-800">
				<div class="flex items-center gap-2">
					<icon-lightbulb class="size-4" />
					<span class="font-bold">I’m looking for a new role!</span>
				</div>

				Find out more about me—and what I can bring to your team.

				<link-tag href="#" v-bind="{ iconStart: 'icon-download' }" class="button--primary ms-auto text-sm no-underline">
					View CV
				</link-tag>
			</div>
		</div>
	</div>
</template>

<script setup>
import ThemeSelector from "@/components/theme-selector/theme-selector.vue";
</script>
