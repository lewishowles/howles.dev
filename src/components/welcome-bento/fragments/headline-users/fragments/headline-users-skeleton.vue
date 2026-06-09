<template>
	<loading-skeleton>
		<template #label>
			<slot />
		</template>

		<div class="flex items-center gap-4">
			<loading-skeleton-indicator class="h-7 w-20 rounded-sm" />

			<loading-skeleton-indicator class="h-6 w-12 rounded-sm" />
		</div>
	</loading-skeleton>
</template>
