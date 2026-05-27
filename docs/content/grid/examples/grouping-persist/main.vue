<template>
  <Grid
    :style="{ height: '520px' }"
    :pageable="{ pageSizes: true }"
    :groupable="true"
    :data-items="resultState.data"
    :total="resultState.total"
    :take="dataState.take"
    :skip="dataState.skip"
    :group="dataState.group"
    :group-expand="collapsedGroup"
    data-item-key="ProductID"
    :columns="columns"
    @datastatechange="onDataStateChange"
    @groupexpandchange="onGroupExpandChange"
  >
      <GridToolbar>
        <KButton :theme-color="'primary'" @click="hasCollapsed ? onGroupsExpand() : onGroupsCollapse()">
          {{ hasCollapsed ? 'Expand' : 'Collapse' }} Groups
        </KButton>
      </GridToolbar>
  </Grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { groupBy, process } from '@progress/kendo-data-query';
import type { GroupResult } from '@progress/kendo-data-query';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import type { GridGroupExpandChangeEvent } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { setGroupIds } from '@progress/kendo-vue-data-tools';
import type { GroupExpandDescriptor } from '@progress/kendo-vue-data-tools';
import products from './gd-products.js';

const initialDataState = {
  take: 10,
  skip: 0,
  group: [
    {
      field: 'UnitsInStock'
    },
    {
      field: 'ProductName'
    }
  ]
};

const processWithGroups = (data, dataState) => {
  const newDataState = process(data, dataState);
  setGroupIds({
    data: newDataState.data,
    group: dataState.group
  });
  return newDataState;
};

const dataState = ref(initialDataState);
const resultState = ref(processWithGroups(products, initialDataState));
const collapsedGroup = ref<GroupExpandDescriptor[]>([]);

const hasCollapsed = computed(() => collapsedGroup.value.some((g) => g.expanded === false));

const columns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' },
  { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
  { field: 'Category.CategoryName', title: 'Category Name' }
];

const onDataStateChange = (event) => {
  const newDataState = processWithGroups(products, event.dataState);
  dataState.value = event.dataState;
  resultState.value = newDataState;
};

const onGroupExpandChange = (event: GridGroupExpandChangeEvent) => {
  collapsedGroup.value = event.groupExpand;
};

const onGroupsExpand = () => {
  collapsedGroup.value = resultState.value.data.reduce<GroupExpandDescriptor[]>((acc, item) => {
    acc.push({
      field: item.field,
      value: item.value,
      expanded: true
    });
    return acc;
  }, []);
};

const onGroupsCollapse = () => {
  const allGroups = groupBy(products, dataState.value.group);
  collapsedGroup.value = (allGroups as GroupResult[]).reduce<GroupExpandDescriptor[]>((acc, item) => {
    acc.push({
      field: item.field,
      value: item.value,
      expanded: false
    });
    return acc;
  }, []);
};
</script>
