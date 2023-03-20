import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/discover',
            name: 'DiscoverPage',
            component: () => import('../views/DiscoverPage.vue')
        },
        {
            path: '/animation',
            name: 'AnimationPage',
            component: () => import('../views/AnimationPage.vue')
        },
        {
            path: '/ui',
            name: 'UiPage',
            component: () => import('../views/UiPage.vue')
        },
        {
            path: '/categories',
            name: 'CategoriesPage',
            component: () => import('../views/CategoriesPage.vue')
        },
    ]
});

export default router;