<template>
	<theme-selector />

	<div class="page-header flex flex-col items-center bg-gradient-to-b from-grey-50 pt-16 dark:bg-none" data-test="page-header">
		<div class="glasses">
			<img src="@/assets/images/glasses/light.svg" class="dark:hidden" width="256" height="108" />
			<img src="@/assets/images/glasses/dark.svg" class="hidden dark:block" width="256" height="108" />
		</div>

		<h1 class="text-center text-[5rem] font-extrabold leading-none text-grey-950 dark:text-grey-50">
			Lewis Howles
		</h1>

		<div class="flex items-center gap-4 text-xl text-blue-800 dark:text-yellow-100">
			<div class="h-px w-10 bg-current" />
			<span class="font-mono">&lt;</span>
			<span class="font-extralight">Versatile UI/UX Developer, Designer & Leader</span>
			<span class="font-mono">/&gt;</span>
			<div class="h-px w-10 bg-current" />
		</div>

		<div class="mt-8 w-full max-w-5xl rounded-full border border-grey-200 p-1 dark:border-transparent">
			<div class="flex items-center gap-4 rounded-full border-purple-200 bg-purple-50 px-6 py-5 text-purple-800 dark:border-transparent dark:bg-purple-400/20 dark:text-white">
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

<style>
.page-header:where(.dark, .dark *),
.glasses:where(.dark, .dark *) {
	position: relative;

	&:before {
		background: radial-gradient(ellipse at center, theme(colors.neon-pink), transparent 70%);
		content: "";
		left: 50%;
		opacity: 0.5;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}
}

.glasses:where(.dark, .dark *) {
	&:before {
		height: 8rem;
		width: 16rem;
	}
}

.page-header:where(.dark, .dark *) {
	&:before {
		height: 20rem;
		top: 0;
		width: 50rem;
	}
}
</style>
