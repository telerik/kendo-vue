<template>
  <Grid
    :style="{ height: '280px' }"
    :data-items="items"
    :columns="columns"
    @custom="customHandler"
  >
    <template #headerTemplate="{ props }">
      <span @click="customHandler"><b>{{ props.field }}</b></span>
    </template>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price', headerCell: 'headerTemplate' },
]);

const items = ref([
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0 },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0 },
]);

function customHandler(e) {
    console.log('customHandler', e);
}
</script>
