import Vue from "vue";
import Router from "vue-router";
const aaa = () => import('@/components-client/aaa');
const bbb = () => import('@/components-client/bbb');
const ccc = () => import('@/components-client/ccc');
const ddd = () => import('@/components-client/ddd');
Vue.use(Router);

const routes = [
    {
        path: '/aaa',
        name: 'aaa',
        component: aaa,
        meta: {
            requireAuth: false,
            requireMenuAuth: false
        }
    },
    {
        path: '/bbb',
        name: 'bbb',
        component: bbb,
        meta: {
            requireAuth: false,
            requireMenuAuth: false
        }
    },
    {
        path: '/ccc',
        name: 'ccc',
        component: ccc,
        meta: {
            requireAuth: false,
            requireMenuAuth: false
        }
    },
    {
        path: '/ddd',
        name: 'ddd',
        component: ddd,
        meta: {
            requireAuth: false,
            requireMenuAuth: false
        }
    },
]

export default new Router({
    routes,
    linkActiveClass: 'current',
});
