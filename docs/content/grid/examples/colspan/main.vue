<template>
  <div>
    <Grid
      :style="{ height: '400px' }"
      :data-items="sampleProducts"
      :columns="[
        { field: 'ProductID', title: 'ID' },
        { field: 'ProductName', className: 'red', colSpan: 2, title: 'Product Name' },
        { field: 'Category.CategoryName', title: 'Category Name' },
        { field: 'UnitPrice', colSpan: colSpanCb, title: 'Price' },
        { field: 'UnitsInStock', title: 'In stock' }
      ]"
    >
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid';
import type { GridColSpanProps } from '@progress/kendo-vue-grid';
import sampleProducts from './gd-products';

const colSpanCb = (props: GridColSpanProps) => {
  const { dataItem } = props;

  if (dataItem.UnitPrice > 30) {
    return 2;
  }

  return 1;
};
</script>

<style>
td[colspan="2"] {
  background-color: lavender;
}
</style>
