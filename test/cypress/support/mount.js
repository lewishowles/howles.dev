import components from "@/components";
import { mount } from "cypress/vue";

Cypress.Commands.add("mount", (component, options = {}) => {
	options.global = options.global || {};
	options.global.stubs = options.global.stubs || {};
	options.global.stubs["transition"] = false;
	options.global.components = options.global.components || {};
	options.global.plugins = options.global.plugins || [];

	options.global.plugins.push({
		install(app) {
			app.use(components);
		},
	});

	return mount(component, options);
});

/**
 * Returns a function to simplify mounting components in Cypress by providing
 * the ability to mount a component with props without having to specify the
 * "props" key, unless "slots" are also required.
 *
 * Any default options passed to this function are merged with any provided
 * options when mounting a component.
 *
 * @param  {object}  component
 *     The component to mount.
 * @param  {object}  defaultOptions
 *     Default options to pass to each subsequent mount call.
 */
export function createMount(component, defaultOptions = {}) {
	/**
	 * Simplify mounting components in Cypress by providing a method to pass
	 * props without the need for a "props" key, unless we also need to specify
	 * "slots".
	 *
	 * @param  {object}  options
	 *     The options to pass to Cypress for this individual mount.
	 */
	return function (options = {}) {
		const mergedOptions = {
			...defaultOptions,
			...options,
			props: {
				...defaultOptions.props,
				...options.props,
			},
			slots: {
				...defaultOptions.slots,
				...options.slots,
			},
		};

		if (!Object.hasOwn(mergedOptions, "props") && !Object.hasOwn(mergedOptions, "slots")) {
			cy.mount(component, { props: mergedOptions });
		} else {
			cy.mount(component, mergedOptions);
		}
	};
}
