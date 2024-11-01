<template>
	<skeleton-loader>
		<template #label>
			<slot />
		</template>

		<div class="flex items-center gap-4">
			<skeleton-indicator class="h-7 w-20 rounded" />

			<skeleton-indicator class="h-6 w-12 rounded" />
		</div>
	</skeleton-loader>
</template>
