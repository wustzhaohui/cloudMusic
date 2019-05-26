import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const index = () => import('@/pages/index');

export default new Router({
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: index
        },
        {
            path: '/index',
            name: 'index',
            component: index
        }
    ]
});
