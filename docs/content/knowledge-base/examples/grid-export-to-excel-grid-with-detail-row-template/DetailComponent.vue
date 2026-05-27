<template>
  <Grid :data-items="filteredProducts" :columns="columns" />
</template>

<script setup>
import { computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { products } from './products';

defineProps({
    dataItem: Object,
});

const columns = [
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'Category.CategoryName', title: 'Category Name' },
];

const filteredProducts = computed(() =>
    filterBy(products, {
        field: 'Category.CategoryID',
        operator: 'eq',
        value: dataItem.CategoryID,
    })
);
</script>
