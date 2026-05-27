<template>
  <Grid
    :data-items="gridData"
    :take="take"
    :skip="skip"
    :sortable="true"
    :sort="sort"
    :filter="filter"
    @datastatechange="dataStateChange"
    :pageable="true"
    :column-menu="columnMenu"
    :columns="columns"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import { products } from './products';

const columnMenu = ref(true);
const columns = ref([
    { field: 'ProductID', title: 'ID', filter: 'numeric' },
    { field: 'ProductName', title: 'Name' },
    { field: 'UnitPrice', filter: 'numeric' },
    { field: 'Discontinued', filter: 'boolean' },
]);
const take = ref(10);
const skip = ref(0);
const gridData = ref([]);
const sort = ref([]);
const filter = ref(null);

const getData = () => {
    const dataState = {
        take: take.value,
        skip: skip.value,
        filter: filter.value,
        sort: sort.value,
    };
    gridData.value = process(products, dataState);
};

const createAppState = (dataState) => {
    take.value = dataState.take;
    skip.value = dataState.skip;
    sort.value = dataState.sort;
    filter.value = dataState.filter;
    getData();
};

const dataStateChange = (event) => {
    createAppState(event.data);
};

onMounted(() => {
    getData();
});
</script>
