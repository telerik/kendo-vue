<template>
    <div>
        <GridToolbar>
            <KButton :theme-color="'primary'" @click="handleSaveSelection" type="button">
                Save Selection
            </KButton>
            &nbsp;
            <KButton :theme-color="'primary'" @click="handleLoadSelection" type="button">
                Load Selection
            </KButton>
        </GridToolbar>
        <Grid
            :style="{ height: '400px' }"
            :data-items="products"
            data-item-key="ProductID"
            :auto-process-data="true"
            :selectable="{
                enabled: true,
                drag: true,
                mode: 'multiple'
            }"
            :select="select"
            @selectionchange="onSelectionChange"
            :navigatable="true"
            :columns="columns"
        >
        </Grid>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import products from './gd-products';

const STORAGE_KEY = 'gridSelection';

const columns = [
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' }
];

const savedSelection = localStorage.getItem(STORAGE_KEY);
const select = ref(savedSelection ? JSON.parse(savedSelection) : { 3: true });

const onSelectionChange = (event) => {
    select.value = event.select;
};

const handleSaveSelection = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(select.value));
};

const handleLoadSelection = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    select.value = saved ? JSON.parse(saved) : {};
};
</script>
