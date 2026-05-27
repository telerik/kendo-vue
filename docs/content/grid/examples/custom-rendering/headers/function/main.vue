<template>
    <grid
      :style="{ height: '280px' }"
      :data-items="items"
      :columns="columns"
    ></grid>
  </template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

// Define reactive variables
const columns = ref(null);

const items = ref([
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0 },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0 }
]);

// Header cell function
const headerCellFunction = (h, emptyElement, props) => {
    return h('span', {
        onClick: customHandler
    }, ['custom ' + props.field]);
};

const customHandler = (e) => {
    console.log('customHandler', e);
};

onBeforeMount(() => {
    columns.value = [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        {
            field: 'UnitPrice',
            title: 'Unit Price',
            headerCell: headerCellFunction
        }
    ]
});

</script>
