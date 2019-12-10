import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "./assets/css/normalize_zh.css"
//配置axios
// axios.defaults.baseURL="http://localhost:5050";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
