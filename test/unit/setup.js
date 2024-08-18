import { config } from "@vue/test-utils";
import * as components from "@lewishowles/components";

console.log(components);

Object.keys(components).forEach(key => {
	config.global.components[key] = components[key];
});
