import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../components/Menu.vue")
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import("../components/Blog.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
