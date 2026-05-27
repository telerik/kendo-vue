<template>
    <div>
        <Grid
            :data-items="products"
            :style="{ height: '400px' }"
            data-item-key="ProductID"
            :selectable="{
                enabled: true,
                drag: false,
                cell: false,
                mode: 'single'
            }"
            :select="select"
            @selectionchange="onSelectionChange"
            @headerselectionchange="onHeaderSelectionChange"
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
    { columnType: 'checkbox' },
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' }
];

const select = ref({});

const onSelectionChange = (event) => {
    select.value = event.select;
};

const onHeaderSelectionChange = (event) => {
    select.value = event.select;
};
</script>
