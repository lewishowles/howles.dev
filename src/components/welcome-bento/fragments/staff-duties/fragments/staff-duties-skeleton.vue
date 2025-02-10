<template>
	<skeleton-loader>
		<template #label>
			<slot />
		</template>

		<skeleton-indicator class="mx-auto size-52 rounded-full" />

		<div class="mx-auto mt-6 flex max-w-72 flex-col gap-2">
			<div class="flex items-center gap-1.5">
				<skeleton-indicator class="size-3 rounded-sm" />
				<skeleton-indicator class="h-2 w-16 rounded-sm" />
				<skeleton-indicator class="ms-auto h-2 w-6 rounded-sm" />
			</div>
			<div class="flex items-center gap-1.5">
				<skeleton-indicator class="size-3 rounded-sm" />
				<skeleton-indicator class="h-2 w-16 rounded-sm" />
				<skeleton-indicator class="ms-auto h-2 w-6 rounded-sm" />
			</div>
			<div class="flex items-center gap-1.5">
				<skeleton-indicator class="size-3 rounded-sm" />
				<skeleton-indicator class="h-2 w-16 rounded-sm" />
				<skeleton-indicator class="ms-auto h-2 w-6 rounded-sm" />
			</div>
			<div class="flex items-center gap-1.5">
				<skeleton-indicator class="size-3 rounded-sm" />
				<skeleton-indicator class="h-2 w-16 rounded-sm" />
				<skeleton-indicator class="ms-auto h-2 w-6 rounded-sm" />
			</div>
		</div>
	</skeleton-loader>
</template>
