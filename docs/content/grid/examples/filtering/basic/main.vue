<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :show-loader="showLoader"
  >
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const showLoader = ref(false);
const filter = ref({
    logic: 'and',
    filters: [
        { field: 'UnitPrice', operator: 'neq', value: 18 },
        {
            field: 'FirstOrderedOn',
            operator: 'gte',
            value: new Date('1996-10-10'),
        },
    ],
});

const columns = computed(() => [
    {
        field: 'ProductID',
        filterable: false,
        title: 'Product ID',
        width: '50px',
    },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
]);

const products = computed(() => filterBy(sampleProducts, filter.value));

function filterChange(ev) {
    showLoader.value = true;
    setTimeout(() => {
        filter.value = ev.filter;
        showLoader.value = false;
    }, 300);
}
</script>
