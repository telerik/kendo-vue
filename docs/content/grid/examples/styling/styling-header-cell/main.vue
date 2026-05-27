<template>
  <Grid
    :style="{ height: '230px' }"
    :data-items="items"
    :columns="columns"
  >
    <template #myHeaderTemplate="{ props }">
      <a class="k-link" @click="props.onClick">
        <span class="k-icon k-i-cart" />
        <span style="color: #53d2fa">{{ props.title }}</span>
        {{ props.children }}
      </a>
    </template>
  </Grid>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const columns = [
    { field: 'ProductID', title: 'ID', width: '40px' },
    { field: 'ProductName', title: 'Product Name', headerCell: 'myHeaderTemplate' },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price' },
    { field: 'UnitsInStock', title: 'In stock' },
];

const items = products.slice(0, 6);
</script>
