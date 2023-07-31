import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LoadingStatus: false,
  },
  mutations: {
    startSpinner(state) {
      state.LoadingStatus = true;
    },
    endSpinner(state) {
      state.LoadingStatus = false;
    },
  },
  getters: {
    getLoding(state) {
      return state.LoadingStatus;
    },
  },
});
