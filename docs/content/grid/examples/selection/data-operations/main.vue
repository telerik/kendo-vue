<template>
    <Grid
        :style="{ height: '480px' }"
        :pageable="{ pageSizes: true }"
        :data-items="processedData"
        data-item-key="ProductID"
        :groupable="{
            enabled: false,
            expandable: true
        }"
        :filterable="true"
        :sortable="true"
        :skip="dataState.skip"
        :take="dataState.take"
        :sort="dataState.sort"
        :group="dataState.group"
        :filter="dataState.filter"
        @datastatechange="onDataStateChange"
        :group-expand="groupExpand"
        @groupexpandchange="onGroupExpandChange"
        :select="select"
        :selectable="{ enabled: true, mode: 'multiple' }"
        @headerselectionchange="onHeaderSelectionChange"
        @selectionchange="onSelectionChange"
        :columns="columns"
    >
    </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const columns = [
    { filterable: false, columnType: 'checkbox' },
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name', columnMenu: true },
    { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric', columnMenu: true },
    { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric', columnMenu: true },
    { field: 'Category.CategoryName', title: 'Category Name', columnMenu: true }
];

const dataState = ref({
    take: 8,
    skip: 0,
    group: [{ field: 'Category.CategoryName' }],
    filter: {
        logic: 'and',
        filters: [{ field: 'UnitsInStock', operator: 'gt', value: 50 }]
    }
});

const select = ref({});
const groupExpand = ref([]);

const processedData = computed(() => process(products, dataState.value));

const onDataStateChange = (event) => {
    dataState.value = event.dataState;
};

const onGroupExpandChange = (event) => {
    groupExpand.value = event.groupExpand;
};

const onHeaderSelectionChange = (event) => {
    select.value = event.select;
};

const onSelectionChange = (event) => {
    select.value = event.select;
};
</script>
