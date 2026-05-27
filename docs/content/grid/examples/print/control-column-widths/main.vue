<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div class="col">
          <KButton @click="print">Print Grid</KButton>
        </div>
      </div>
    </div>
    <Grid
      :style="dimensions"
      :data-items="dataItems"
      :columns="columns"
      :scrollable="scrollable"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import products from './products.json';

const dataItems = ref(products);
const printState = ref(false);
const scrollable = ref('scrollable');
const dimensions = ref({ height: '400px', width: '600px' });

const defaultColumns = [
    { field: 'ProductID', title: 'ID', width: '250px' },
    { field: 'ProductName', title: 'Product Name', width: '250px' },
    { field: 'UnitPrice', title: 'Unit Price', width: '350px' },
    { field: 'Discontinued', title: 'Discontinued', width: '250px' },
    { field: 'QuantityPerUnit', title: 'QuantityPerUnit', width: '250px' },
    { field: 'Category.CategoryName', title: 'CategoryName', width: '250px' },
];

const columns = computed(() =>
    printState.value
        ? defaultColumns.map((column) => ({ ...column, width: 120 }))
        : defaultColumns
);

function print() {
    setPrintLayout();
    setTimeout(() => {
        window.print();
        setNormalLayout();
    });
}

function setPrintLayout() {
    printState.value = true;
    dimensions.value = { height: '100%', width: '100%' };
    scrollable.value = 'none';
}

function setNormalLayout() {
    printState.value = false;
    dimensions.value = { height: '400px', width: '800px' };
    scrollable.value = 'scrollable';
}
</script>

<style>
@media print {
  * {
    overflow: visible !important;
    visibility: hidden;
  }

  .k-grid {
    visibility: visible;
    margin-top: -60px;
  }

  .k-grid * {
    visibility: visible;
  }
}
</style>
