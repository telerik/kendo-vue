<template>
  <Grid
    :data-items="products"
    :style="{ height: '400px' }"
    :row-height="50"
    :detail="'detailTemplate'"
    :data-item-key="'ProductID'"
    :detail-row-height="196"
    scrollable="virtual"
    :page-size="pageSize"
    :skip="skip"
    :total="products.length"
    @pagechange="handlePageChange"
    :detail-expand="detailExpand"
    @detailexpandchange="handleDetailExpandChange"
    :columns="columns"
  >
    <template #detailTemplate="{ props }">
      <section>
        <p>
          <strong>In Stock:</strong> {{ props.dataItem.UnitsInStock }} units
        </p>
        <p>
          <strong>On Order:</strong> {{ props.dataItem.UnitsOnOrder }} units
        </p>
        <p>
          <strong>Reorder Level:</strong> {{ props.dataItem.ReorderLevel }} units
        </p>
        <p>
          <strong>Discontinued:</strong> {{ props.dataItem.Discontinued }}
        </p>
        <p>
          <strong>Category:</strong> {{ props.dataItem.Category.CategoryName }} - {{ props.dataItem.Category.Description }}
        </p>
      </section>
    </template>
  </Grid>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products.js';

const skip = ref(0);
const detailExpand = ref({});
const pageSize = 20;

const handlePageChange = (event) => {
  skip.value = event.page.skip;
};

const handleDetailExpandChange = (event) => {
  detailExpand.value = event.detailExpand;
};

const columns = [
  { field: 'ProductName', title: 'Product', width: '300px' },
  { field: 'ProductID', title: 'ID', width: '50px' },
  { field: 'UnitPrice', title: 'Unit Price', width: '100px' },
  { field: 'QuantityPerUnit', title: 'Qty Per Unit' }
];
</script>
