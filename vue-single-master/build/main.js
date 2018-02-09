// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from "./store" //vuex


import VueLazyload from 'vue-lazyload'
import axios from "axios";


import Base from "./lib/utils";

import {
  config
} from "./lib/config";






import vButton from "@/components/v-button";
import vHeader from "@/components/v-header";

import { Indicator, Toast, Loadmore } from 'mint-ui';

Vue.component("load-more", Loadmore);
Vue.prototype.$mint = {
 Indicator,
 Toast
}

Vue.prototype.$http = axios;

Vue.prototype.$config = config

Vue.use(VueLazyload, {
  preLoad: 1,
  error: "assets/img/error.jpg",
  loading: "assets/img/loading.gif",
  attempt: 1,
  lazyComponent: true
});
Vue.use(Base);

Vue.component("v-button", vButton);
Vue.component("v-header", vHeader);

Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm =new Vue({
  el: '#app',
  router,
  store,
  template: '<app/>',
  components: {
    app
  }
})
