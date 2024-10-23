<template>
	<skeleton-loader>
		<template #label>
			<slot />
		</template>

		<div class="flex gap-2">
			<skeleton-indicator class="size-10 rounded-full" />

			<div class="flex flex-col gap-1">
				<skeleton-indicator class="h-5 w-32" />
				<skeleton-indicator class="h-4 w-24" />
			</div>

			<skeleton-indicator class="ms-auto h-10 w-24 rounded-full" />
		</div>
	</skeleton-loader>
</template>
