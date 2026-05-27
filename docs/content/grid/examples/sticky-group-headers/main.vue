<template>
    <Grid
        :style="{ height: '520px' }"
        :groupable="{
            enabled: true,
            footer: 'visible',
            stickyHeaders: true,
            stickyFooters: true
        }"
        :data-items="resultState"
        :group="dataState.group"
        @datastatechange="handleDataStateChange"
        :cells="{ groupFooter: 'myGroupFooter' }"
        :columns="columns"
    >
        <template #myGroupFooter="{ props }">
            <td v-bind="props.tdProps" :colSpan="1">
                <template v-if="props.field === 'UnitPrice'">
                    Average: {{ props.dataItem.aggregates.UnitPrice.average.toFixed(2) }}
                </template>
                <template v-else-if="props.field === 'UnitsInStock'">
                    Sum: {{ props.dataItem.aggregates.UnitsInStock.sum }}
                </template>
            </td>
        </template>
    </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import { setGroupIds } from '@progress/kendo-vue-data-tools';
import products from './gd-products';

const columns = [
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' },
    { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
    { field: 'Category.CategoryName', title: 'Category Name' }
];

const aggregates = [
    { field: 'UnitsInStock', aggregate: 'sum' },
    { field: 'UnitPrice', aggregate: 'average' }
];

const processWithGroups = (data, dataState) => {
    if (dataState.group) {
        dataState.group.forEach((group) => (group.aggregates = aggregates));
    }

    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });

    return newDataState;
};

const initialDataState = {
    group: [{ field: 'Category.CategoryName' }]
};

const dataState = ref(initialDataState);
const resultState = ref(processWithGroups(products, initialDataState));

const handleDataStateChange = (event) => {
    const newDataState = processWithGroups(products, event.dataState);
    dataState.value = event.dataState;
    resultState.value = newDataState;
};
</script>
