<template>
  <Grid
    :style="{ height: '355px' }"
    :data-items="data"
    :filterable="true"
    :pageable="true"
    :sort="dataState.sort"
    :skip="dataState.skip"
    :take="dataState.take"
    :filter="dataState.filter"
    :columns="[
      { field: 'ProductID', title: 'ID', filterable: false, width: '40px' },
      { field: 'ProductName', title: 'Product Name', width: '240px' },
      { field: 'UnitsInStock', title: 'Units in Stock', width: '170px', filter: 'numeric' },
      { field: 'QuantityPerUnit', title: 'Quantity per Unit', width: '180px' },
      { field: 'Discontinued', filter: 'boolean' }
    ]"
    @datastatechange="onDataStateChange"
  >
  </Grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import type { GridDataStateChangeEvent } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import type { State } from '@progress/kendo-data-query';
import sampleProducts from './gd-sample-products';

const initialDataState: State = {
  sort: [{ field: 'ProductName', dir: 'asc' }],
  take: 5,
  skip: 0,
  filter: {
    logic: 'and',
    filters: [{ field: 'ProductName', operator: 'contains', value: 'Ch' }]
  }
};

const dataState = ref<State>(initialDataState);
const data = computed(() => process(sampleProducts, dataState.value));

const onDataStateChange = (event: GridDataStateChangeEvent) => {
  dataState.value = event.dataState;
};
</script>
