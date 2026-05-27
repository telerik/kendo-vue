<template>
  <Grid
    :style="{ height: '365px' }"
    data-item-key="ProductID"
    :data-items="sampleProducts"
    :auto-process-data="true"
    :navigatable="true"
    :filterable="true"
    :default-filter="initialFilter"
    :columns="[
      { field: 'ProductID', title: 'ID', filterable: false, width: '40px' },
      { field: 'ProductName', title: 'Product Name', width: '240px' },
      { field: 'FirstOrderedOn', title: 'First Ordered On', width: '220px', filter: 'date', format: '{0:d}' },
      { field: 'UnitPrice', width: '180px', title: 'Unit Price', filter: 'numeric', format: '{0:c}' },
      { field: 'Discontinued', filter: 'boolean' }
    ]"
  >
  </Grid>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid';
import type { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import sampleProducts from './gd-sample-products';

const initialFilter: CompositeFilterDescriptor = {
  logic: 'and',
  filters: [{ field: 'ProductName', operator: 'contains', value: 'C' }]
};
</script>
