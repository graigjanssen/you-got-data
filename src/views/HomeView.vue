<template>
  <ResultsTable
    title="Products That Are Very Real"
    :data="products"
  />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import ResultsTable from '@/components/ResultsTable.vue';

export default defineComponent({
  components: {
    ResultsTable
  },
  computed: {
    ...mapGetters(['getProducts']),
    products () {
      return this.getProducts
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  mounted() {
    this.fetchProducts();
  }
});
</script>
