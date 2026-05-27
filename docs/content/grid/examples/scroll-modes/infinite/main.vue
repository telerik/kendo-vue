<template>
  <Grid
    style="height: 400px;"
    :data-items="gridData"
    :columns="columns"
    @scroll="scrollHandler"
  />
  <br />
  showing: {{ gridData.length }} items
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const availableProducts = products.slice();
const gridData = ref(availableProducts.splice(0, 20));
const columns = [
    { field: 'ProductID', title: 'ID', width: '40px' },
    { field: 'ProductName', title: 'Name', width: '250px' },
    { field: 'Discontinued', width: '250px' },
    { field: 'UnitPrice', width: '250px' },
    { field: 'QuantityPerUnit', width: '250px' },
    { field: 'Category.CategoryName', width: '250px' },
];

function scrollHandler(event) {
    const e = event;
    if (e.target.scrollTop + 10 >= e.target.scrollHeight - e.target.clientHeight) {
        const moreData = availableProducts.splice(0, 10);
        if (moreData.length > 0) {
            gridData.value = gridData.value.concat(moreData);
        }
    }
}
</script>
