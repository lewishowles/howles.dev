<template>
	<loading-skeleton>
		<template #label>
			<slot />
		</template>

		<div class="flex gap-4">
			<loading-skeleton-indicator class="w-1 rounded-full" />

			<div class="flex flex-col py-1">
				<div class="flex gap-2">
					<loading-skeleton-indicator class="size-3 rounded-full" />
					<loading-skeleton-indicator class="h-3 w-12 rounded-sm" />
				</div>

				<loading-skeleton-indicator class="mt-3 mb-1 h-5 w-40 rounded-sm" />
				<loading-skeleton-indicator class="h-5 w-32 rounded-sm" />
			</div>
		</div>

		<loading-skeleton-indicator class="mt-6 mb-2 h-7 w-full rounded-sm" />

		<div class="mb-1 flex justify-between">
			<loading-skeleton-indicator class="h-3 w-10 rounded-sm" />
			<loading-skeleton-indicator class="h-3 w-10 rounded-sm" />
		</div>
	</loading-skeleton>
</template>
