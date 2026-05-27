<template>
    <div>
        <Grid
            :data-items="products"
            :auto-process-data="true"
            :style="{ height: '400px' }"
            data-item-key="ProductID"
            :selectable="{
                enabled: true,
                drag: false,
                cell: false,
                mode: 'multiple'
            }"
            :default-select="{ 3: true, 4: true }"
            :columns="columns"
        >
        </Grid>
    </div>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const columns = [
    { columnType: 'checkbox' },
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' }
];
</script>
