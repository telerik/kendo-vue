<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :loader="loader"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const sampleProductsRef = ref(sampleProducts);
const loader = ref(false);
const filter = ref({
    logic: 'and',
    filters: [
        { field: 'UnitPrice', operator: 'neq', value: 18 },
        { field: 'FirstOrderedOn', operator: 'gte', value: new Date('1996-10-10') },
    ],
});

const products = computed(() => filterBy(sampleProductsRef.value, filter.value));

const isFiltered = (col) => {
    const filters = filter.value ? filter.value.filters : [];
    return filters.findIndex((f) => f.field === col.field) >= 0;
};

const columns = computed(() =>
    [
        { field: 'ProductID', filterable: false, title: 'Product ID', width: '50px' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
        { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
        { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
    ].map((col) =>
        isFiltered(col)
            ? { ...col, headerClassName: 'filtered' }
            : col
    )
);

const filterChange = (ev) => {
    loader.value = true;
    setTimeout(() => {
        filter.value = ev.filter;
        loader.value = false;
    }, 300);
};
</script>

<style>
.filtered {
  background-color: red;
}
</style>
