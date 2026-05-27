<template>
  <Grid
    :style="{ width: '370px' }"
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
    filters: [],
});

const columns = computed(() => [
    {
        field: 'ProductID',
        filterable: false,
        title: 'ID',
        width: '50px',
    },
    { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
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
