import { createStore } from 'vuex'
import { fetchData } from '@/services/apiService';

export default createStore({
  state: {
    products: []
  },
  getters: {
    getProducts: state => state.products,
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await fetchData();
        commit('SET_PRODUCTS', data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
