<template>
  <ResultsFilter
    :categories="categories"
    @apply="applyFilters"
  />
  <ResultsTable
    title="Products That Are Very Real"
    :data="filteredProducts"
  />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Product } from '@/types/interfaces';
import ResultsFilter from '@/components/ResultsFilter.vue';
import ResultsTable from '@/components/ResultsTable.vue';

export default defineComponent({
  components: {
    ResultsFilter,
    ResultsTable
  },
  computed: {
    ...mapGetters(['getProducts', 'getFilteredProducts']),
    products(): Product[] {
      return this.getProducts;
    },
    filteredProducts(): Product[] {
      return this.getFilteredProducts.length > 0 ? this.getFilteredProducts : this.products;
    },
    categories(): string[] {
      if (this.products.length) {
        const categories: string[] = [];
        this.products.forEach((product: Product) => {
          if (!categories.includes(product.category)) {
            categories.push(product.category)
          }
        });
        return categories;
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'setFilteredProducts']),
    applyFilters(category: string) {
      let filteredProducts: Product[];

      if (category === 'all') {
        filteredProducts = this.products;
      } else {
        filteredProducts = this.products.filter((product: Product) => {
          return product.category === category;
        });
      }
      this.setFilteredProducts(filteredProducts); 
    }
  },
  mounted() {
    this.fetchProducts();
  }
});
</script>
