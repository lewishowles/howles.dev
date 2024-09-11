<template>
	<div class="mx-auto w-full max-w-7xl pb-10 text-sm md:px-6 md:pb-20 xl:px-0" data-test="page-footer">
		<div class="mb-10 h-px max-w-96 bg-gradient-to-r from-grey-200 to-transparent dark:from-white/30" />

		<div class="flex flex-col flex-wrap gap-4 px-6 md:flex-row md:items-center md:px-0">
			<base-icon class="page-footer-icon size-4">
				<defs>
					<linearGradient id="page-footer-icon-gradient" x1="50%" x2="50%" y1="0%" y2="100%">
						<stop offset="0%" class="page-footer-icon-stop-start" />
						<stop offset="100%" class="page-footer-icon-stop-end" />
					</linearGradient>
				</defs>
				<path fill="url(#page-footer-icon-gradient)" fill-rule="evenodd" d="M5.647 14.802a7 7 0 0 1-.785.622A3.4 3.4 0 0 1 2.926 16q-1.489 0-2.207-1.354Q-.001 13.29 0 11.14q0-2.066.533-4.707t1.572-4.538T4.583 0q.81 0 1.276.753.465.754.466 2.16 0 2.014-1.117 4.672t-3.027 5.266q.12.694.39.99t.71.297q.693 0 1.217-.398.418-.317 1.019-.995a29.348 29.348 0 0 1 .529-6.074q.532-2.827 1.572-4.75Q8.658.002 10.113 0q.777 0 1.26.669.48.669.481 1.735 0 1.71-.997 3.547-.999 1.838-3.247 4.292a32 32 0 0 0-.051 1.812q.558-1.44 1.243-2.345.684-.906 1.353-1.295.668-.39 1.226-.39.54 0 .82.28t.279.821q0 .44-.186 1.66-.161.973-.27 1.955-.102.922-.102 2.057 0 .643-.262.923-.263.279-.854.279-.558 0-.812-.288-.255-.288-.254-.863 0-.678.237-2.235.203-1.355.203-1.727 0-.27-.186-.271-.22 0-.626.567-.405.568-.811 1.498-.405.931-.66 1.965-.185.795-.431 1.075-.245.279-.77.279-.523 0-.769-.38-.186-.29-.28-.818M4.292 1.5q-.371 0-.838 1.423-.467 1.422-.821 3.531a27 27 0 0 0-.387 4.046 22.7 22.7 0 0 0 1.82-4.02q.676-2.015.676-3.677 0-1.303-.45-1.303m5.47.25q-.315 0-.698.879-.384.878-.742 2.37a31 31 0 0 0-.584 3.251 12.2 12.2 0 0 0 1.789-2.713q.706-1.467.707-2.661 0-.546-.123-.836-.121-.29-.349-.29" transform="translate(1.76)" />
			</base-icon>

			<i18n-t keypath="footer.text" tag="p" scope="global">
				<template #link_text>
					<link-tag v-bind="{ href: 'https://www.sketch.com/s/d2f29e4f-768f-4696-9b55-12633742a86c', external: true }">
						{{ t("footer.link_text") }}
					</link-tag>
				</template>
			</i18n-t>

			<p class="md:ms-auto">
				{{ t("footer.thanks") }}
			</p>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style>
.page-footer-icon-stop-start {
	stop-color: theme("colors.purple.800");

	&:where(.dark, .dark *) {
		stop-color: theme("colors.blue.300");
	}
}

.page-footer-icon-stop-end {
	stop-color: theme("colors.pink.700");

	&:where(.dark, .dark *) {
		stop-color: theme("colors.blue.300");
	}
}
</style>
