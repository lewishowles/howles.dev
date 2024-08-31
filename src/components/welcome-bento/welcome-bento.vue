<template>
	<div class="welcome-bento grid w-full max-w-7xl grid-cols-3 gap-6">
		<div class="leading col-start-1 row-span-3 flex flex-col gap-3 text-balance rounded-2xl bg-gradient-to-br from-pink-700 to-purple-800 px-12 py-10 text-lg text-white">
			<p class="font-bold">
				Hi, I’m Lewis  👋
			</p>
			<p>I’m a passionate, versatile UI/UX Developer and Designer, with over <strong>15 years</strong> experience spanning UI Design, Front-end Development, Web Design, Graphic Design, Accessibility and, historically, Backend Development.</p>
		</div>
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
		<div class="col-span-2 col-start-2 row-span-4 bg-grey-100">
			Welcome 2
		</div>
		<div class="col-start-1 row-span-2 bg-grey-100">
			Team access
		</div>
	</div>
</template>

<script setup>
import PaddockStatus from "./fragments/paddock-status/paddock-status.vue";
</script>
