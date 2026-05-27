<template>
  <div>
    <Grid 
      :style="{ height: '420px' }" 
      :data-items="sampleProducts.slice(0, 10)"
      :columns="[
        { field: 'ProductID', title: 'ID', width: '40px', resizable: false },
        { 
          title: 'Product Information',
          children: [
            { field: 'ProductName', title: 'Product Name' },
            { 
              title: 'Unit',
              children: [
                { field: 'UnitPrice', title: 'Unit Price', colSpan: 2 },
                { field: 'UnitsInStock', title: 'Units In Stock' }
              ]
            }
          ]
        },
        { 
          title: 'Category',
          children: [
            { field: 'Category.CategoryName', title: 'Category Name', colSpan: 2 },
            { field: 'Category.Description', title: 'Description' }
          ]
        }
      ]"
    >
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid';
import sampleProducts from './gd-products';
</script>

<style>
td[colspan="2"] {
  background-color: lavender;
}
</style>
