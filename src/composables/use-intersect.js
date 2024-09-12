import { computed, ref } from "vue";
import { isNumber } from "@lewishowles/helpers/number";
import { useIntersectionObserver, useMediaQuery } from "@vueuse/core";

/**
 * Apply an intersection observer to the provided element and providing a
 * reactive ref for whether it has been intersected or not.
 *
 * @param  {object}  element
 *     A reference to the element to use for the intersection.
 * @param  {number}  options.mobileThreshold
 *     The threshold (0-1) before the element is considered to be visible on
 *     smaller screens.
 * @param  {number}  options.desktopThreshold
 *     The threshold (0-1) before the element is considered to be visible on
 *     larger screens.
 * @param  {number}  options.threshold
 *     The threshold (0-1) before the element is considered to be visible. Used
 *     for both smaller and larger screens and overrides the other two values.
 */
export default function useIntersect(element, { mobileThreshold = 0.05, desktopThreshold = 0.3, threshold = null, once = true } = {}) {
	// Whether we're looking at a (relatively) large screen.
	const largeScreen = useMediaQuery("(min-width: 1024px)");
	// Whether the element should be shown.
	const show = ref(false);

	// The threshold at which to fade in our projects. Since the threshold is a
	// percentage of the element visible at one time, this needs to be smaller
	// on smaller screens.
	const intersectionThreshold = computed(() => {
		if (isNumber(threshold)) {
			return threshold;
		}

		if (!largeScreen.value) {
			return mobileThreshold;
		}

		return desktopThreshold;
	});

	const { stop } = useIntersectionObserver(element, ([{ isIntersecting }]) => {
		show.value = isIntersecting;

		if (once && isIntersecting) {
			stop();
		}
	}, { threshold: intersectionThreshold.value });

	return {
		show,
	};
}
