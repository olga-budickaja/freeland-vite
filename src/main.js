import { createApp } from 'vue'
import './styles/global.scss'
import App from './App.vue'
import router from "@/router/index.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCode, faBars, faMagnifyingGlass, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faBars, faMagnifyingGlass, faSun, faMoon)

const app = createApp(App);

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
