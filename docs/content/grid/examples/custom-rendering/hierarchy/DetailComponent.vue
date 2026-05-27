<template>
  <Grid :data-items="getFilteredProducts" :columns="columns" />
</template>

<script setup>
import { computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { products } from './products';

const props = defineProps({
    dataItem: Object,
});

const columns = [
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'Category.CategoryName', title: 'Category Name' },
];

const getFilteredProducts = computed(() =>
    filterBy(products, { field: 'Category.CategoryID', operator: 'eq', value: props.dataItem.CategoryID })
);
</script>
