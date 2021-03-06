import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueSwal from 'vue-swal';
Vue.use(VueSwal);

import router from "./router";

import axios from "axios";
const base = axios.create({
  baseURL: "http://localhost:3000",
});
Vue.prototype.$http = base;

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
