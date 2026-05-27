<template>
  <Grid
    :style="{ height: '280px' }"
    :data-items="items"
    :columns="columns"
  />
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const columns = [
    { field: 'ProductID', title: 'ID', width: '40px' },
    { field: 'ProductName', title: 'Product Name', className: 'product-name' },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price' },
    { field: 'UnitsInStock', title: 'In stock' },
];

const items = products.slice(0, 6);
</script>

<style>
.product-name {
  color: #f0ffff;
  background-color: #888888;
}
</style>
