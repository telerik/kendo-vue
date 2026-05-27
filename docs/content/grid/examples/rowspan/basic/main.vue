<template>
  <div>
    <Grid
      :style="{ height: '500px' }"
      :data-items="products"
      :row-spannable="true"
      :columns="[
        { field: 'ProductID', title: 'ID', width: '60px' },
        { field: 'ProductName', title: 'Name', width: '250px' },
        { field: 'Category.CategoryName', title: 'CategoryName' },
        { field: 'UnitPrice', title: 'Price', width: '80px' },
        { field: 'UnitsInStock', title: 'In stock', width: '80px' },
        { field: 'Discontinued', width: '120px' }
      ]"
    >
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';
</script>

<style>
td[rowspan="2"] {
  background-color: lavender;
}
td[rowspan="4"] {
  background-color: lavenderblush;
}
</style>
