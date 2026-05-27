<template>
  <Grid :style="{ height: '280px' }" :data-items="items" :columns="columns">
    <template #myTemplate="{ props }">
      <td :class="props.className" v-html="getNestedValue(props.field, props.dataItem)"></td>
    </template>
  </Grid>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import { ref } from 'vue';

const items = ref([
    {
        ProductID: 1,
        ProductName: "This is <b>BOLD text</b>",
        UnitPrice: 18.0,
    },
    {
        ProductID: 2,
        ProductName: "Check <span style='color: red; font-weight: bold'>this styled text</span>",
        UnitPrice: 19.0,
    },
    {
        ProductID: 3,
        ProductName: "hello my name is <strong> Giuseppe </strong>",
        UnitPrice: 10.0,
    },
    {
        ProductID: 4,
        ProductName: "<i>Chef Anton's </i>Cajun Seasoning",
        UnitPrice: 22.0,
    },
    {
        ProductID: 5,
        ProductName: "<span style='color: green'> This is green text</span>",
        UnitPrice: 22.0,
    },
]);

const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name', cell: 'myTemplate' },
    { field: 'UnitPrice', title: 'Unit Price' },
]);

function getNestedValue(fieldName, dataItem) {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
}
</script>
