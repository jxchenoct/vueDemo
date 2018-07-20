// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex";
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
      count:0
  },
  mutations:{
    addCount(state){
      state.count++;
    },
    changCount(state,changNum){

    }
  },
  getters:{
    showCount(state){
      return state.count;
    }
  }
})

Vue.config.productionTip = false

import { NavBar,Tabbar, TabbarItem, GoodsAction, GoodsActionBigBtn,GoodsActionMiniBtn,Icon } from 'vant';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c=>c(App),
  router,
  store
})
