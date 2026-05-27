<template>
    <div>
        <Grid
            :style="{ height: '400px' }"
            :data-items="products"
            data-item-key="ProductID"
            :selectable="{
                enabled: true,
                cell: true,
                mode: 'single'
            }"
            :navigatable="true"
            :default-select="{ 4: [1] }"
            :columns="columns"
        >
        </Grid>
    </div>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const columns = [
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' }
];
</script>
