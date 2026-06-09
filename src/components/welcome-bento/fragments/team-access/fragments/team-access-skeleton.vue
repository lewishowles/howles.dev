<template>
	<div>
		<loading-skeleton>
			<template #label>
				<slot />
			</template>

			<div class="flex gap-2">
				<loading-skeleton-indicator class="size-10 rounded-full" />

				<div class="flex flex-col gap-1">
					<loading-skeleton-indicator class="h-5 w-32" />
					<loading-skeleton-indicator class="h-4 w-24" />
				</div>

				<loading-skeleton-indicator class="ms-auto h-10 w-24 rounded-full" />
			</div>
		</loading-skeleton>
	</div>
</template>
