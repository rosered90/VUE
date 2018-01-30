import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);  //进行引用

  const state={
    count:1
  }
  const mutations={
    add(state){
      state.count ++;
    },
    reduce(state){
      state.count --;
    }
  }

  export default new Vuex.Store({
    state,
    mutations,
  })
