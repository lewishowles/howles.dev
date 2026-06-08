<template>
	<div class="w-full" data-test="content-section">
		<div class="mx-auto max-w-7xl px-12 pb-12 xl:px-0">
			<h2
				class="content-section-eyebrow relative mb-1 flex items-center gap-4 font-semibold text-purple-700 xl:mb-2 xl:text-xl dark:text-purple-300"
			>
				<slot name="eyebrow" />

				<div class="from-grey-200 dark:from-grey-50/20 hidden h-px w-64 bg-linear-to-r md:block" />
			</h2>

			<p class="text-grey-950 dark:text-grey-50 mb-6 text-4xl font-bold xl:mb-6 xl:text-5xl">
				<slot name="title" />
			</p>

			<p class="max-w-[37.5rem]">
				<slot name="intro" />
			</p>
		</div>

		<div
			class="from-grey-50 relative bg-linear-to-b to-white pt-12 dark:from-black/20 dark:to-transparent"
		>
			<div
				class="content-section-pattern text-grey-200 dark:text-grey-50/10 absolute inset-x-0 bottom-full h-4 border-b border-current"
			/>

			<div class="mx-auto max-w-7xl px-6 xl:px-0">
				<slot />
			</div>
		</div>
	</div>
</template>

<style>
@reference "../../assets/css/main.css";

.content-section-eyebrow {
	&::before,
	&::after {
		border-color: currentColor;
		color: var(--color-grey-200);
		content: "";
		position: absolute;
		right: 100%;
		top: 0;
	}

	&:where(.dark, .dark *) {
		&::before,
		&::after {
			color: --alpha(var(--color-grey-50) / 20%);
		}
	}

	&::before {
		border-bottom-width: 1px;
		border-top-width: 1px;
		height: 38px;
		margin-right: 16px;
		margin-top: 12px;
		width: 20px;
	}

	&::after {
		border-left-width: 1px;
		border-right-width: 1px;
		height: 36px;
		margin-right: 31px;
		margin-top: 13px;
		width: 5px;
	}

	@media (min-width: 1280px) {
		&::before {
			height: 48px;
			margin-top: 12px;
		}

		&::after {
			height: 46px;
			margin-top: 13px;
		}
	}
}

.content-section-pattern {
	background: repeating-linear-gradient(
		-45deg,
		currentColor,
		currentColor 1px,
		transparent 1px,
		transparent 6px
	);

	&:where(.dark, .dark *) {
		background: repeating-linear-gradient(
			-45deg,
			currentColor,
			currentColor 1px,
			transparent 1px,
			transparent 6px
		);
	}
}
</style>
