<template>
  <h3 v-if="title">{{title}}</h3>
  <table v-if="!isLoading" class="results-table">
    <thead class="results-table--head">
      <tr>
        <th class="results-table--header"
            v-for="header in tableHeaders"
            :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="results-table--body">
      <tr class="results-table--row"
          v-for="row in tableData"
          :key="row.id">
        <td class="results-table--cell"
            v-for="col in tableKeys"
            :key="col">
          <template v-if="col === 'rating'">
            {{ row[col]['rate'] }} ({{ row[col]['count']}} reviews)
          </template>
          <template v-else-if="col === 'image'">
            <img class="results-table--img" :src="row[col]" alt="product image">
          </template>
          <template v-else>
            {{ row[col] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
  <h3 v-else>LOADING...</h3>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false
    },
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    tableKeys () {
      if (!this.data || this.data.length === 0) {
        return [];
      } else {
        return Object.keys(this.data[0]);
      }
    },
    tableHeaders () {
      return this.tableKeys ? this.tableKeys.map(this.toTitleCase) : [];
    },
    tableData () {
      return this.data;
    },
    isLoading () {
      return !this.data;
    }
  },
  methods: {
    toTitleCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
})
</script>
