<template>
	<div class="flex flex-col items-center gap-16 lg:gap-28">
		<layout-header />

		<main
			id="main"
			class="flex w-full flex-col items-center gap-16 outline-0 lg:gap-28"
			tabindex="-1"
		>
			<welcome-bento />
			<core-values />
			<about-me />
			<super-cool-projects />
		</main>

		<layout-footer />
	</div>
</template>
