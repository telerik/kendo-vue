<template>
  <Grid
    :style="{ height: '280px' }"
    :data-items="items"
    :cell-render="'myTemplate'"
    :columns="columns"
    @custom="customHandler"
  >
    <template #myTemplate="{ props }">
      <td :class="[props.class]">
        <b>{{ getNestedValue(props.field, props.dataItem) }}</b>
      </td>
    </template>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
]);

const items = ref([
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0 },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0 },
]);

const customHandler = (e) => {
    console.log('customHandler', e);
};

const getNestedValue = (fieldName, dataItem) => {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
};
</script>
