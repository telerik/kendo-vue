<template>
  <div class="example-config">
    <b>Select Filter Type:</b>
    <RadioGroup
      :data-items="dataItems"
      v-model="radioGroupValue"
      layout="horizontal"
      @change="onFilterTypeChange"
    />
  </div>
  <Grid
    :style="{ height: '450px' }"
    :data-items="products"
    :column-menu="radioGroupValue === 'menu'"
    :filterable="radioGroupValue === 'row'"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :show-loader="showLoader"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const radioGroupValue = ref('row');
const showLoader = ref(false);
const filter = ref(null);

const dataItems = [
    { label: 'Filter row', value: 'row' },
    { label: 'ColumnMenu Filtering', value: 'menu' },
];

const products = computed(() => filterBy(sampleProducts, filter.value));

const columns = computed(() => [
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px', columnMenu: false },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
    { field: 'Discontinued', title: 'Discontinued' },
]);

function filterChange(ev) {
    showLoader.value = true;
    setTimeout(() => {
        filter.value = ev.filter;
        showLoader.value = false;
    }, 300);
}

function onFilterTypeChange() {
    filter.value = null;
}
</script>
