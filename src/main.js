import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

// 使用 MintUI
Vue.use(MintUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
