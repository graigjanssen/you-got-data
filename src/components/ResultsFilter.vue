<template>
  <div class="results-filter">
    <form class="filter-form" @submit.prevent="applyFilters">
      <div class="filter-section">
        <label for="category">Category</label>
        <select id="category" v-model="selectedCategory">
          <option value="all">All</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <button class="btn-apply" type="submit">Apply</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => {[]}
    }
  },
  data() {
    return {
      selectedCategory: 'all'
    }
  },
  methods: {
    applyFilters() {
      this.$emit('apply', this.selectedCategory);
    }
  }
})
</script>