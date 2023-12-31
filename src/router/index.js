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
    {
        path: '/aboutme',
        name: 'aboutme',
        component: () => import("../components/AboutMe.vue")
    },
    {
        path: '/cv',
        name: 'cv',
        component: () => import("../components/CV.vue")
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import("../components/Contact.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
