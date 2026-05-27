<template>
  <Grid
    :style="{ height: '520px' }"
    data-item-key="ProductID"
    :data-items="products"
    :auto-process-data="true"
    :groupable="true"
    :default-group="initialGroup"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid';
import type { GroupDescriptor } from '@progress/kendo-data-query';
import products from './gd-products.js';

const initialGroup: GroupDescriptor[] = [
  {
    field: 'UnitsInStock'
  },
  {
    field: 'ProductName'
  }
];

const columns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' },
  { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
  { field: 'Category.CategoryName', title: 'Category Name' }
];
</script>
