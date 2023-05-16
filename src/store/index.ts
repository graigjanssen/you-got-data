import { createStore } from 'vuex'
import { fetchData } from '@/services/apiService';

export default createStore({
  state: {
    products: [],
    filteredProducts: []
  },
  getters: {
    getProducts: state => state.products,
    getFilteredProducts: state => state.filteredProducts
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_FILTERED_PRODUCTS(state, data) {
      state.filteredProducts = data;
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
    },
    setFilteredProducts({ commit }, products) {
      commit('SET_FILTERED_PRODUCTS', products);
    }
  },
  modules: {
  }
})
