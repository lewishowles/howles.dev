import { createI18n } from "vue-i18n";
import enGB from "./en_GB.json";

const messages = {
	"en-GB": enGB,
};

const i18n = createI18n({
	locale: "en-GB",
	fallbackLocale: "en-GB",
	messages,
	legacy: false,
});

export default i18n;
