<template>
  <Grid
    :style="{ height: '400px' }"
    :data-items="items"
    :columns="columns"
    :row-render="cellFunction"
  />
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const columns = [
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Price' },
    { field: 'UnitsInStock', title: 'In stock' },
    { field: 'Discontinued' },
];

const items = products;

function cellFunction(h, trElement, defaultSlots, props) {
    const available = !props.dataItem.Discontinued;
    const green = {
        backgroundColor: 'rgba(55, 180, 0, 0.32)',
    };
    const red = {
        backgroundColor: 'rgba(243, 23, 0, 0.32)',
    };
    const trProps = {
        style: available ? green : red,
    };

    return h('tr', trProps, defaultSlots);
}
</script>
