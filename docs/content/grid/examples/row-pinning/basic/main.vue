<template>
    <Grid
        :style="{ height: '400px' }"
        :data-items="products"
        data-item-key="ProductID"
        :pinnable="true"
        :context-menu="true"
        :default-pinned-top-rows="[products[0], products[1]]"
        :default-pinned-bottom-rows="[products[products.length - 1]]"
        :columns="columns"
    >
    </Grid>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const columns = [
    { columnType: 'pin' },
    { field: 'ProductID', title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price', format: '{0:c}', width: '120px' },
    { field: 'UnitsInStock', title: 'Units In Stock', width: '130px' },
    { field: 'Category.CategoryName', title: 'Category' }
];
</script>
