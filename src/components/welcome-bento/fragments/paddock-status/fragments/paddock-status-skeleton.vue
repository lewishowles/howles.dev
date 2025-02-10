<template>
	<skeleton-loader>
		<template #label>
			<slot />
		</template>

		<div class="flex gap-4">
			<skeleton-indicator class="w-1 rounded-full" />

			<div class="flex flex-col py-1">
				<div class="flex gap-2">
					<skeleton-indicator class="size-3 rounded-full" />
					<skeleton-indicator class="h-3 w-12 rounded-sm" />
				</div>

				<skeleton-indicator class="mb-1 mt-3 h-5 w-40 rounded-sm" />
				<skeleton-indicator class="h-5 w-32 rounded-sm" />
			</div>
		</div>

		<skeleton-indicator class="mb-2 mt-6 h-7 w-full rounded-sm" />

		<div class="mb-5 flex justify-between">
			<skeleton-indicator class="h-3 w-10 rounded-sm" />
			<skeleton-indicator class="h-3 w-10 rounded-sm" />
		</div>

		<skeleton-indicator class="h-10 w-32 rounded-full" />
	</skeleton-loader>
</template>
