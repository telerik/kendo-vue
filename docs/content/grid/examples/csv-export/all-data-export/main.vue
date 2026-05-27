<template>
  <Grid
    :data-items="products"
    :csv="csvOptions"
    :auto-process-data="true"
    :pageable="true"
    :columns="columns"
  >
    <GridToolbar>
      <GridCsvExportButton :theme-color="'primary'" />
    </GridToolbar>
  </Grid>
</template>

<script setup lang="ts">
import { Grid, GridToolbar, GridCsvExportButton } from '@progress/kendo-vue-grid';
import type { GridCSVExportOptions } from '@progress/kendo-vue-grid';
import products from './gd-products';

const csvOptions: GridCSVExportOptions = {
  allPages: true,
  fileName: 'products-export.csv',
  lineSeparator: '\n',
  preventFormulaInjection: true,
  includeUTF8BOM: true,
};

const columns = [
  { field: 'ProductID', title: 'ID', width: '80px' },
  { field: 'ProductName', title: 'Product Name', width: '300px' },
  { field: 'Category.CategoryName', title: 'Category' },
  { field: 'UnitPrice', title: 'Unit Price' },
  { field: 'UnitsInStock', title: 'In Stock' },
  { field: 'Discontinued', title: 'Discontinued' },
];
</script>
