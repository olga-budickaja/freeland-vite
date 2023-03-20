import { createApp } from 'vue'
import './styles/global.scss'
import App from './App.vue'
import router from "@/router/index.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCode, faBars, faMagnifyingGlass, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { languages, defaultLocale } from "@/i18n/index.js";
import { createI18n, useI18n } from 'vue-i18n';

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
})

library.add(faCode, faBars, faMagnifyingGlass, faSun, faMoon)

const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t }
    }
});

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(i18n)
    .use(router)
    .mount('#app')
