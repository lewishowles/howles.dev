<template>
	<div class="welcome-bento w-full max-w-7xl grid-cols-3 gap-6 lg:grid" data-test="welcome-bento">
		<div class="col-start-1 row-span-3 flex flex-col gap-3 text-balance rounded-2xl bg-gradient-to-b from-grey-50 to-white px-12 py-10 md:bg-gradient-to-br md:from-pink-700 md:to-purple-800 md:text-lg md:text-white">
			<p class="font-bold">
				Hi, I’m Lewis  👋
			</p>
			<p>I’m a passionate, versatile UI/UX Developer and Designer, with over <strong>15 years</strong> experience spanning UI Design, Front-end Development, Web Design, Graphic Design, Accessibility and, historically, Backend Development.</p>
		</div>

		<template v-if="includeUiExamples">
			<div class="col-start-2 row-span-2">
				<paddock-status />
			</div>
			<div class="col-start-3 row-span-4 bg-grey-100">
				Project
			</div>
			<div class="col-start-2 row-span-3 bg-grey-100">
				Preferences
			</div>
			<div class="col-start-1 row-span-4 bg-grey-100">
				Staff duties
			</div>
			<div class="col-start-3 bg-grey-100">
				Users
			</div>
		</template>

		<div class="relative col-span-2 col-start-2 row-span-4 mt-3 gap-3 bg-gradient-to-b from-grey-50 to-white px-12 py-10 md:mt-0 md:rounded-2xl md:bg-gradient-to-br md:from-pink-700 md:to-purple-800 md:text-lg md:text-white">
			<svg viewBox="0 0 10 1" class="absolute inset-x-0 bottom-full h-auto w-full text-grey-50 md:hidden">
				<polygon points="0,1 10,0 10,1" fill="currentColor" />
			</svg>

			<p class="mb-6">
				I’m enthusiastic about improving the user’s experience, the developer’s experience, and making websites and apps that are not only beautiful and powerful, but also <strong>easy to use</strong> and <strong>accessible</strong>. My passion for inclusive design fuels my drive to craft delightful user experiences.
			</p>

			<link-tag href="#" icon-end="icon-arrow-right" class="button--primary text-base no-underline hocus:text-white md:bg-grey-950/30 md:bg-none md:ring-offset-pink-700 md:focus-visible:ring-purple-300 md:active:bg-grey-950/50 md:hocus:bg-grey-950/40">
				Super-cool projects
			</link-tag>

			<ul class="inset-well mt-10 flex flex-wrap gap-3 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 text-xs md:gap-5 md:bg-grey-950/20 md:bg-none md:text-sm">
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					UI design
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Front-end development
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Web design
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Accessibility
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Design systems
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Testing
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Tools
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Planning
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Communication
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					Graphic design
				</li>
				<li class="rounded-full border border-current px-[1em] py-[0.5em] text-purple-800 md:text-white">
					& more!
				</li>
			</ul>
		</div>
		<div v-if="includeUiExamples" class="col-start-1 row-span-2 bg-grey-100">
			Team access
		</div>
	</div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";

import PaddockStatus from "./fragments/paddock-status/paddock-status.vue";

// Why do we do it like this? It's better to do a simple media query check and
// avoid loading all of the sample components if they're not shown.
const includeUiExamples = useMediaQuery("(min-width: 1024px)");
</script>
