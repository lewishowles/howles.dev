<template>
	<div
		class="mx-auto w-full max-w-7xl pb-10 text-sm md:px-6 md:pb-20 xl:px-0"
		data-test="layout-footer"
	>
		<div
			class="from-grey-200 mb-10 h-px max-w-96 bg-linear-to-r to-transparent dark:from-white/30"
		/>

		<div class="flex flex-col flex-wrap gap-4 px-6 md:flex-row md:items-center md:px-0">
			<icon-h class="size-4 fill-purple-800 dark:fill-blue-400" />

			<i18n-t keypath="footer.text" tag="p" scope="global">
				<template #sketch_link_text>
					<link-tag
						v-bind="{
							href: 'https://www.sketch.com/s/d2f29e4f-768f-4696-9b55-12633742a86c',
							external: true,
						}"
						class="dark:text-blue-300"
						data-test="layout-footer-sketch-link"
					>
						{{ t("footer.sketch_link_text") }}
					</link-tag>
				</template>
				<template #github_link_text>
					<link-tag
						v-bind="{ href: 'https://github.com/lewishowles/howles.dev', external: true }"
						class="dark:text-blue-300"
						data-test="layout-footer-github-link"
					>
						{{ t("footer.github_link_text") }}
					</link-tag>
				</template>
			</i18n-t>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
