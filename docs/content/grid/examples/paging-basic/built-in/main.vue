<template>
  <div>
    <Grid
      style="height: 400px"
      data-item-key="ProductID"
      :data-items="products"
      :auto-process-data="true"
      :default-skip="0"
      :default-take="10"
      :pageable="{
        buttonCount: 4,
        pageSizes: [5, 10, 15, 'All']
      }"
      :columns="columns"
    />
  </div>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
];
</script>
