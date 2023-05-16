<template>
  <ResultsTable
    title="Products That Are Very Real"
    :data="products"
  />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { fetchData } from '@/services/apiService';
import ResultsTable from '@/components/ResultsTable.vue';

export default defineComponent({
  components: {
    ResultsTable
  },
  data () {
    return {
      products: null,
    }
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await fetchData();
        console.log('products? ', this.products);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
});
</script>
