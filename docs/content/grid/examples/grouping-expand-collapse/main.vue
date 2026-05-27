<template>
  <Grid
    :style="{ height: '520px' }"
    :pageable="{ pageSizes: true }"
    :groupable="true"
    :data-items="data.data"
    :total="data.total"
    :take="dataState.take"
    :skip="dataState.skip"
    :group="dataState.group"
    :group-expand="groupExpand"
    :columns="columns"
    @datastatechange="handleDataStateChange"
    @groupexpandchange="handleGroupExpandChange"
  >
      <GridToolbar>
        <KButton :theme-color="'primary'" @click="handleGroupsToggle">
          {{ someCollapsed ? 'Expand' : 'Collapse' }} Groups
        </KButton>
      </GridToolbar>
  </Grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { process } from '@progress/kendo-data-query';
import type { State } from '@progress/kendo-data-query';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import type { GridDataStateChangeEvent, GridGroupExpandChangeEvent } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import type { GroupExpandDescriptor } from '@progress/kendo-vue-data-tools';
import products from './gd-products.js';

const groupExpand = ref<GroupExpandDescriptor[]>([]);

const dataState = ref<State>({
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
});

const data = computed(() => process(products, dataState.value));
const someCollapsed = computed(() =>
  Boolean(groupExpand.value?.length && hasCollapsed(groupExpand.value, dataState.value.group?.length))
);

const columns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric' },
  { field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric' },
  { field: 'Category.CategoryName', title: 'Category Name' }
];

const handleDataStateChange = (event: GridDataStateChangeEvent) => {
  dataState.value = event.dataState;
};

const handleGroupExpandChange = (event: GridGroupExpandChangeEvent) => {
  groupExpand.value = event.groupExpand;
};

const handleGroupsToggle = () => {
  groupExpand.value = !someCollapsed.value
    ? getGroupsExpandDescriptor(data.value.data, false, dataState.value.group?.length)
    : [];
};

const getGroupsExpandDescriptor = (
  groups: any[],
  expanded: boolean,
  maxDepth: number = 0,
  level: number = 0
): GroupExpandDescriptor[] => {
  if (maxDepth <= level) {
    return [];
  }

  return groups.map((group) => {
    const result: GroupExpandDescriptor = {
      field: group.field,
      value: group.value,
      expanded
    };

    if (group?.items?.length) {
      result.groups = getGroupsExpandDescriptor(group.items, expanded, maxDepth, level++);
    }

    return result;
  });
};

const hasCollapsed = (groups: GroupExpandDescriptor[], maxDepth: number = 0, level = 0): boolean => {
  return level < maxDepth
    ? groups.some((g) => g.expanded === false || !g.groups?.length || hasCollapsed(g.groups, maxDepth, level + 1))
    : false;
};
</script>
