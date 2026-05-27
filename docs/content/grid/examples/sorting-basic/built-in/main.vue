<template>
  <Grid
    :style="{ height: '300px' }"
    data-item-key="ProductID"
    :data-items="data"
    :auto-process-data="true"
    :sortable="true"
    :default-sort="initialSort"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import type { SortDescriptor } from '@progress/kendo-data-query';
import products from './gd-products.js';

const initialSort: SortDescriptor[] = [{ field: 'ProductName', dir: 'asc' }];

const data = ref(products);

const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
];
</script>
