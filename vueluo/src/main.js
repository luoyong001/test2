// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/api'

import '@/assets/css/style.css'
import './assets/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import '@/assets/js/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    data:{message:'222'}
});

Vue.prototype.$api=api;

/*router.beforeEach((to,from,next)=>{
  console.log(to);
  next();//必须调用才能进入下一个路由
});*/

