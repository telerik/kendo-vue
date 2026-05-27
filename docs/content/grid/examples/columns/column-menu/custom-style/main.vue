<template>
  <Grid
    :data-items="gridData"
    :take="take"
    :skip="skip"
    :sortable="true"
    :sort="sort"
    :filter="filter"
    :column-menu-icon="starIcon"
    @datastatechange="dataStateChange"
    @filterchange="filterChange"
    @sortchange="sortChange"
    :pageable="true"
    :column-menu="true"
    :columns="columns"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import './styles.css';
import { Grid, filterGroupByField, sortGroupByField } from '@progress/kendo-vue-grid';
import { starIcon } from '@progress/kendo-svg-icons';
import { process } from '@progress/kendo-data-query';
import { products } from './products';

const columns = ref([
    { field: 'ProductName', title: 'Name' },
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

const filterChange = (event) => {
    const isColumnActive = filterGroupByField(event.event.field, event.filter);
    const changedColumn = columns.value.find((column) => column.field === event.event.field);

    if (changedColumn) {
        changedColumn.headerClassName = isColumnActive ? 'active' : '';
    }

    filter.value = event.filter;
    getData();
};

const sortChange = (event) => {
    const isColumnActive = sortGroupByField(event.event.field, event.sort);
    const changedColumn = columns.value.find((column) => column.field === event.event.field);

    if (changedColumn) {
        changedColumn.headerClassName = isColumnActive ? 'active' : '';
    }

    sort.value = event.sort;
    getData();
};

onMounted(() => {
    getData();
});
</script>
