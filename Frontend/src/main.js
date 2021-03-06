// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'es6-promise/auto';
import Vue from 'vue';
import App from './App';
import router from './router';
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue';


Vue.use(BootstrapVue)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
