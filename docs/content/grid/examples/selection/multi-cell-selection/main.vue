<template>
    <div>
        <div :style="{ padding: '5px', color: '#999' }">
            <div>Ctrl+Click/Enter - add to selection</div>
            <div>Shift+Click/Enter - select range</div>
        </div>
        <Grid
            :style="{ height: '400px' }"
            :data-items="products"
            data-item-key="ProductID"
            :selectable="{
                enabled: true,
                drag: true,
                cell: true,
                mode: 'multiple'
            }"
            :navigatable="true"
            :default-select="{ 3: [1], 4: [1], 5: [1] }"
            @selectionchange="onSelectionChange"
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

const onSelectionChange = (event) => {
    console.log(event.select);
};
</script>
