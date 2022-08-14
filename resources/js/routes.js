import { createRouter, createWebHistory } from 'vue-router';
const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
