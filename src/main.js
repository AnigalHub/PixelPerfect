import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
