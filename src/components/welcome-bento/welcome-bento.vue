<template>
	<div
		class="welcome-bento mx-auto w-full max-w-7xl grid-cols-3 gap-6 text-sm lg:grid lg:px-6 xl:px-0"
		data-test="welcome-bento"
	>
		<welcome-part-one
			class="col-start-1 row-span-4 row-start-1 mx-4 -mt-12 rounded-lg lg:mx-0 lg:mt-0"
		/>

		<div v-if="includeUiExamples" aria-hidden="true" class="contents">
			<div class="col-start-2 row-span-3 row-start-1">
				<paddock-status />
			</div>
			<div class="col-start-3 row-span-5 row-start-1">
				<create-project />
			</div>
			<div class="col-start-2 row-span-3 row-start-4">
				<user-preferences />
			</div>
			<div class="col-start-1 row-span-4 row-start-5">
				<staff-duties />
			</div>
			<div class="col-start-3 row-start-6">
				<headline-users />
			</div>
		</div>

		<welcome-part-deux class="col-span-2 col-start-2 row-span-4 row-start-7" />

		<div v-if="includeUiExamples" class="col-start-1 row-span-2 row-start-9" aria-hidden="true">
			<team-access />
		</div>
	</div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";

// Why do we do it like this? It's better to do a simple media query check and
// avoid loading all of the sample components if they're not shown.
const includeUiExamples = useMediaQuery("(min-width: 1024px)");
</script>
