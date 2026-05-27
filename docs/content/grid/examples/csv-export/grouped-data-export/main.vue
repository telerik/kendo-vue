<template>
  <Grid
    :style="{ height: '550px' }"
    :data-item-key="'ProductID'"
    :data-items="products"
    :auto-process-data="true"
    :groupable="true"
    :default-group="initialGroup"
    :csv="{ fileName: 'GroupedProducts.csv' }"
    :columns="columns"
  >
    <GridToolbar>
      <GridCsvExportButton :theme-color="'primary'">Export to CSV</GridCsvExportButton>
    </GridToolbar>
  </Grid>
</template>

<script setup lang="ts">
import { Grid, GridToolbar, GridCsvExportButton } from '@progress/kendo-vue-grid';
import type { GroupDescriptor, AggregateDescriptor } from '@progress/kendo-data-query';
import products from './gd-products';

const aggregates: AggregateDescriptor[] = [{ field: 'UnitPrice', aggregate: 'sum' }];
const initialGroup: GroupDescriptor[] = [
  { field: 'Category.CategoryName', aggregates },
  { field: 'Discontinued', aggregates },
];

const columns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' as const },
  { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' as const },
  { field: 'Category.CategoryName', title: 'Category Name' },
  { field: 'Discontinued', title: 'Discontinued' },
];
</script>
