<template>
  <Grid :show-loader="showLoader" :loader="'loader'" :style="{ height: '400px' }" :data-items="data" :columns="columns">
    <template #loader>
      <div class="k-loading-mask">
        <div class="k-loading-color" />
        <div :style="{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }">
          <Loader :size="'large'" :type="'pulsing'" />
          <span :style="{ fontSize: '1.25rem' }">Loading data...</span>
        </div>
      </div>
    </template>
  </Grid>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Loader } from '@progress/kendo-vue-indicators';
import products from './gd-products.js';

const data = ref<any>([]);
const showLoader = ref<boolean>(true);

const columns = [
  { field: 'ProductID', width: 50, title: 'ID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'Category.CategoryName', title: 'CategoryName' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'In stock' }
];

onMounted(() => {
  showLoader.value = true;

  setTimeout(() => {
    showLoader.value = false;
    data.value = products;
  }, 2000);
});
</script>
