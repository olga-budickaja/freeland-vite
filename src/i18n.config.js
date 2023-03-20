import { defaultLocale, languages } from "@/i18n/index.js";
import { createI18n } from "vue-i18n";

const localeStorageLang = localStorage.getItem('lang');

const messages = Object.assign(languages)
export const i18n = createI18n({
    legacy: false,
    locale: localeStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})