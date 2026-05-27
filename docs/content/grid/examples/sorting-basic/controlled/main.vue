<template>
  <Grid
    :style="{ height: '300px' }"
    :data-items="data"
    :sortable="true"
    :sort="sort"
    :columns="columns"
    @sortchange="handleSortChange"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import type { GridSortChangeEvent } from '@progress/kendo-vue-grid';
import { orderBy } from '@progress/kendo-data-query';
import type { SortDescriptor } from '@progress/kendo-data-query';
import products from './gd-products.js';

const initialSort: SortDescriptor[] = [{ field: 'ProductName', dir: 'asc' }];

const sort = ref<SortDescriptor[]>(initialSort);
const data = computed(() => orderBy(products, sort.value));

const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
];

const handleSortChange = (event: GridSortChangeEvent) => {
  sort.value = event.sort;
};
</script>
