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
                mode: 'multiple'
            }"
            :select="select"
            :navigatable="true"
            @selectionchange="onSelectionChange"
            :columns="columns"
        >
        </Grid>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const columns = [
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' }
];

const select = ref({ 3: true, 4: true, 5: true });

const onSelectionChange = (event) => {
    select.value = event.select;
};
</script>
