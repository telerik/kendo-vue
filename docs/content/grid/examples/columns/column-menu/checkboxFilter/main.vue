<template>
  <div>
    <Grid
      :data-items="result"
      :take="dataState.take"
      :skip="dataState.skip"
      :filter="dataState.filter"
      @datastatechange="dataStateChange"
      :columns="columns"
      :sortable="true"
      :pageable="true"
      :page-size="8"
    >
      <template #myTemplate="{ props }">
        <ColumnMenu
          :column="props.column"
          :filterable="props.filterable"
          :filter="props.filter"
          :unique-data="false"
          @filterchange="handleFilterChange"
          @closemenu="props.onClosemenu"
        />
      </template>
    </Grid>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import ColumnMenu from './ColumnMenu.vue';
import { products } from './products';

const result = ref([]);
const dataState = ref({
    take: 8,
    skip: 0,
    filter: null,
});
const columns = ref([
    {
        field: 'ProductID',
        title: 'Product Id',
        filter: 'numeric',
        columnMenu: 'myTemplate',
    },
    { field: 'ProductName', columnMenu: 'myTemplate' },
    { field: 'Category.CategoryName', columnMenu: 'myTemplate' },
    { field: 'UnitPrice', filter: 'numeric', columnMenu: 'myTemplate' },
    { field: 'Discontinued', filter: 'boolean', columnMenu: 'myTemplate' },
]);

const handleFilterChange = (filter) => {
    dataState.value = {
        ...dataState.value,
        filter,
    };
    result.value = process(products.slice(0), dataState.value);
};

const createDataState = (state) => {
    dataState.value = {
        ...dataState.value,
        ...state,
    };
    result.value = process(products.slice(0), dataState.value);
};

const dataStateChange = (event) => {
    createDataState(event.dataState);
};

onMounted(() => {
    createDataState({
        take: 8,
        skip: 0,
        filter: null,
    });
});
</script>
