import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)
Vue.use(Router)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
