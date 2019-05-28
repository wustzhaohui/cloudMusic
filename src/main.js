import Vue from 'vue';
import App from './App.vue';
// 路由
import router from '@/router';
// 过滤器
import '@/filter';
// 样式
import '@/styles/_base.less';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    next();
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
