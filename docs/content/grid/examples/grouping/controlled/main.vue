<template>
  <Grid
    :style="{ height: '520px' }"
    data-item-key="ProductID"
    :groupable="true"
    :data-items="groupedData"
    :group="group"
    :group-expand="groupExpand"
    :columns="columns"
    @groupchange="handleGroupChange"
    @groupexpandchange="handleGroupExpandChange"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import type { GridGroupChangeEvent, GridGroupExpandChangeEvent } from '@progress/kendo-vue-grid';
import type { GroupExpandDescriptor } from '@progress/kendo-vue-data-tools';
import { groupBy } from '@progress/kendo-data-query';
import type { GroupDescriptor } from '@progress/kendo-data-query';
import products from './gd-products.js';

const initialGroup: GroupDescriptor[] = [
  {
    field: 'UnitsInStock'
  },
  {
    field: 'ProductName'
  }
];

const group = ref<GroupDescriptor[]>(initialGroup);
const groupExpand = ref<GroupExpandDescriptor[]>([]);

const groupedData = computed(() => groupBy(products, group.value));

const columns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' },
  { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
  { field: 'Category.CategoryName', title: 'Category Name' }
];

const handleGroupChange = (event: GridGroupChangeEvent) => {
  group.value = event.group;
};

const handleGroupExpandChange = (event: GridGroupExpandChangeEvent) => {
  groupExpand.value = event.groupExpand;
};
</script>
