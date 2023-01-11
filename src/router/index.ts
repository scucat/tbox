import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/demo1'
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import(/* webpackChunkName: "add" */ '../components/Calendar/index')
    },
    {
        path: '/demo1',
        name: 'Demo1',
        component: () => import(/* webpackChunkName: "add" */ '../demo/demo1')
    },
    {
        path: '/demo2',
        name: 'Demo2',
        component: () => import(/* webpackChunkName: "add" */ '../demo/demo2.vue')
    },
    {
        path: '/demo3',
        name: 'Demo3',
        component: () => import(/* webpackChunkName: "add" */ '../components/Editor/demo3.vue')
    },
    // {
    //   path: '/xview',
    //   name:'XView',
    //   component:XView,
    //   children:[
    //     {
    //       path: 'button-view',
    //       name: 'ButtonView',
    //       component: ButtonView
    //     },
    //   ]
    // },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router