<template>
  <Grid
    :style="{ height: '520px' }"
    :resizable="true"
    :reorderable="true"
    :filterable="true"
    :sortable="true"
    :groupable="true"
    scrollable="virtual"
    :row-height="50"
    :data-items="dataResult.data"
    :total="dataResult.total"
    @datastatechange="dataStateChange"
    :skip="dataState.skip"
    :take="dataState.take"
    :group="dataState.group"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import products from './gd-products.js';

const dataStateAllData = (currentDataState) => ({ ...currentDataState, take: products.length });

const dataState = ref({
  skip: 0,
  take: 30,
  group: [{ field: 'Category.CategoryName' }]
});

const dataResult = ref(process(products, dataStateAllData(dataState.value)));

const dataStateChange = (event) => {
  if (!event.event || event.event.type !== 'scroll') {
    dataResult.value = process(products, dataStateAllData(event.data));
  }

  dataState.value = event.data;
};

const columns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' },
  { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
  { field: 'Category.CategoryName', title: 'Category Name' }
];
</script>
