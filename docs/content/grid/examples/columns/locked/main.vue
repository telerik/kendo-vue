<template>
  <Grid
    :style="{ height: '400px', width: '500px' }"
    :data-items="products"
    :reorderable="true"
    @columnreorder="columnReorder"
    :columns="columns"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { products as productData } from './products';

const products = ref(createRandomData());
const columns = ref([
    { field: 'ProductID', title: 'ID', width: '45px', locked: true },
    { field: 'ProductName', title: 'Name', width: '250px' },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price', width: '90px' },
    { field: 'UnitsInStock', title: 'In stock', width: '90px' },
    { field: 'UnitsOnOrder', title: 'On order', width: '90px' },
    { field: 'Discontinued', locked: true, width: '120px' },
    { field: 'QuantityPerUnit', title: 'Additional details', width: '250px' },
]);

const columnReorder = (options) => {
    columns.value = options.columns;
};

function createRandomData() {
    return productData;
}
</script>
