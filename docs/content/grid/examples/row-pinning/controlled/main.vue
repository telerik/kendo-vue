<template>
    <Grid
        :style="{ height: '400px' }"
        :data-items="products"
        data-item-key="ProductID"
        :pinnable="true"
        :context-menu="true"
        :pinned-top-rows="pinnedTop"
        :pinned-bottom-rows="pinnedBottom"
        @rowpinchange="handleRowPinChange"
        :columns="columns"
    >
    </Grid>
</template>

<script setup>
import { ref } from 'vue';
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

const pinnedTop = ref([products[0], products[1]]);
const pinnedBottom = ref([products[products.length - 1]]);

const handleRowPinChange = (event) => {
    pinnedTop.value = event.pinnedTopRows;
    pinnedBottom.value = event.pinnedBottomRows;
};
</script>
