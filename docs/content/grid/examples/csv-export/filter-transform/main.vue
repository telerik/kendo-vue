<template>
  <Grid
    :data-items="products"
    :csv="true"
    :on-csvexport="handleFilteredExport"
    :columns="columns"
  >
    <GridToolbar>
      <GridCsvExportButton :theme-color="'primary'" />
    </GridToolbar>
  </Grid>
</template>

<script setup lang="ts">
import { Grid, GridToolbar, GridCsvExportButton } from '@progress/kendo-vue-grid';
import products from './gd-products';

const handleFilteredExport = (data: any[]) => {
  return data
    .filter((item) => !item.Discontinued)
    .map((item) => ({
      ...item,
      UnitPrice: `$${item.UnitPrice.toFixed(2)}`,
      UnitsInStock: item.UnitsInStock > 0 ? item.UnitsInStock : 'Out of Stock',
    }));
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
