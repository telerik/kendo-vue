<template>
  <Grid
    :data-items="testProducts"
    :csv="csvOptions"
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

const testProducts = [
  { ProductID: 1, ProductName: '=1+1', UnitPrice: 10, UnitsInStock: 5 },
  { ProductID: 2, ProductName: '+SUM(A1:A10)', UnitPrice: 20, UnitsInStock: 10 },
  { ProductID: 3, ProductName: '-2*3', UnitPrice: 30, UnitsInStock: 15 },
  { ProductID: 4, ProductName: '@cmd|calc', UnitPrice: 40, UnitsInStock: 20 },
  { ProductID: 5, ProductName: 'Safe Product Name', UnitPrice: 50, UnitsInStock: 25 },
];

const csvOptions: GridCSVExportOptions = {
  preventFormulaInjection: false,
  fileName: 'export-without-protection.csv',
};

const columns = [
  { field: 'ProductID', title: 'ID', width: '80px' },
  { field: 'ProductName', title: 'Product Name', width: '300px' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Stock' },
];
</script>
