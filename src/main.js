import Vue from 'vue';
import iView from 'iview';
import {router} from './views-router/index';
import axios from 'axios';
import store from './vuex/store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';


Vue.use(VueI18n);
Vue.use(iView);

/* 配置请求域名 */
let $url = '';
let $http = document.location.protocol + "//";
let $host = window.location.host;
if (location.href.indexOf('//localhost') != -1) {
    //本地接口地址
    $url = '';
} else if (location.href.indexOf('//192.168') != -1) {
    //测试接口地址
    $url = $http + $host + "/";
} else {
    // 线上接口地址
    $url = $http + $host + "/";
}
Vue.prototype.$url = $url;

/* 定义请求 */
Vue.prototype.$post = function (url, data, type) {
    return axios({
        method: 'post', // 请求协议
        url: url, // 请求的地址
        data: arguments.length == 2 ? Qs.stringify(data) : data, // post 请求的数据
        timeout: 80000, // 超时时间, 单位毫秒
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
};
Vue.prototype.$get = function (url, params) {
    return axios({
        method: 'get', // 请求协议
        url: url, // 请求的地址
        params, // get 请求时带的参数
        timeout: 80000, // 超时时间, 单位毫秒
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
};
Vue.prototype.$form = function (url, data) {
    return axios({
        method: 'post', // 请求协议
        url: url, // 请求的地址
        data: data, // post 请求的数据
        timeout: 80000, // 超时时间, 单位毫秒
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};
/* 定义时间戳转时间方法 */
Vue.prototype.$timetrans = function (dd) {
    let date = new Date(dd * 1000);//如果date为10位不需要乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
};
Vue.prototype.$timeDate = function (dd) {
    let date = new Date(dd * 1000);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    return Y + M + D;
};
Vue.prototype.$timeMonth = function (dd) {
    let date = new Date(dd * 1000);
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    return M + D;
};
Vue.prototype.$timeHour = function (dd) {
    let date = new Date(dd * 1000);
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    return h + m;
};

Vue.prototype.$Day = function (begintime, endtime) {
    let nTime = endtime - begintime;
    let day = Math.floor(nTime / 86400000);
    return day;
};
/* 生成加密随机数 */
Vue.prototype.$randomChar = function () {
    let x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
    let tmp = "";
    let timestamp = new Date().getTime();
    for (let i = 0; i < 13; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return timestamp + tmp;
};
Vue.prototype.$sortObj = function (obj) {
    let returnObj = [];
    for (let i = obj.length - 1; i >= 0; i--) {
        returnObj.push(obj[i]);
    }
    return returnObj;
};
/* 设置全局基础页码配置 */
Vue.prototype.$pageSize = 10;
Vue.prototype.$pageSizeArray = [10, 15, 20, 25];



new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted () {
        this.$store.dispatch("updateMenulist",this);
    },
    created () {
    }
});
