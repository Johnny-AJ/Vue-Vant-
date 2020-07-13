import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import { Button, Swipe, SwipeItem, NavBar, Icon, Sticky,  Tabbar, TabbarItem } from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Sticky).use(Tabbar).use(TabbarItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
