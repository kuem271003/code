import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/trang-chu',
        component: ()=>import('../components/client/homepage/index.vue'),
        meta : {layout : 'default'}
    },
    {
        path : '/san-pham',
        component: ()=>import('../components/client/product/index.vue'),
        meta : {layout : 'default'}
    },
    {
        path : '/profile',
        component: ()=>import('../components/admin/profile/index.vue'),
        meta : {layout : 'default'}
    },
    {
        path : '/happy_20_10',
        component: ()=>import('../components/admin/happy20_10/index.vue'),
        meta : {layout : 'default'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router