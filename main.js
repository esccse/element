import 'babel-polyfill';
import Vue from 'vue';
import App from './AppClient';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import messages from './assets/i18n/i18n';
import utils from "./assets/js/utils";
import constants from '@/assets/js/constants';
import VueEcharts from 'vue-echarts';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

new Vue({
        el: '#app',
        router,
        store,
        i18n,
        template: '<App/>',
        components: { App }
    });
