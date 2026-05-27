<template>
    <Grid
        :style="{ height: '520px' }"
        data-item-key="ProductID"
        :groupable="true"
        :data-items="groupBy(products, group)"
        :lock-groups="true"
        @groupchange="handleGroupChange"
        :group="group"
        :group-expand="groupExpand"
        @groupexpandchange="handleGroupExpandChange"
        :columns="columns"
    >
    </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { groupBy } from '@progress/kendo-data-query';
import products from './gd-products';

const columns = [
    { field: 'ProductName', title: 'Product Name', width: '250px', locked: true },
    { field: 'Category.CategoryName', title: 'Category Name', width: '150px', locked: true },
    { field: 'Discontinued', title: 'Discontinued', width: '140px' },
    { field: 'UnitPrice', title: 'Unit Price', width: '120px' },
    { field: 'UnitsInStock', title: 'Units In Stock', width: '150px' },
    { field: 'QuantityPerUnit', title: 'Quantity Per Unit', width: '200px' },
    { field: 'Category.Description', title: 'Category Description', width: '400px' },
    { field: 'UnitsOnOrder', title: 'Units on Order', width: '150px' }
];

const group = ref([{ field: 'Category.CategoryName' }]);
const groupExpand = ref([]);

const handleGroupChange = (event) => {
    group.value = event.group;
};

const handleGroupExpandChange = (event) => {
    groupExpand.value = event.groupExpand;
};
</script>
