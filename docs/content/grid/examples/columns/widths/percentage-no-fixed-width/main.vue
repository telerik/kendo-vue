<template>
  <div ref="divWrapper">
    <Grid style="height: 400px" :data-items="products" :columns="columns" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const divWrapper = ref(null);

const columns = [
    { field: 'ProductID', title: 'ID' },
    { field: 'ProductName', title: 'Name' },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price' },
    { field: 'UnitsInStock', title: 'In stock' },
];

onMounted(() => {
    divWrapper.value.offsetWidth; // Trigger initial layout
});
</script>

<style>
.k-grid-header col:nth-of-type(1),
.k-grid-table col:nth-of-type(1) {
  width: 10%;
}

.k-grid-header col:nth-of-type(2),
.k-grid-table col:nth-of-type(2) {
  width: 40%;
}

.k-grid-header col:nth-of-type(3),
.k-grid-table col:nth-of-type(3) {
  width: 40%;
}

.k-grid-header col:nth-of-type(4),
.k-grid-table col:nth-of-type(4) {
  width: 10%;
}
</style>
