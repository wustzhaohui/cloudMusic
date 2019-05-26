import Vue from 'vue';
import moment from 'moment';
// 汉化中文
moment.locale('zh-cn');
// 将moment挂到全局
Vue.prototype.$moment = moment;

Vue.filter('amDateFormat', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    if (!value) {
        return;
    };
    return moment(value).format(format);
});
