import Vue from 'vue';
import App from './App.vue';
// 路由
import router from '@/router';
// 过滤器
import '@/filter';
// 样式
import '@/styles/_style.less';
// icon-font
import '@/styles/iconfont/iconfont';
import mIcon from '@/components/m-icon';

Vue.config.productionTip = false;
// 全局组件
Vue.component('m-icon', mIcon);

router.beforeEach((to, from, next) => {
    next();
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
