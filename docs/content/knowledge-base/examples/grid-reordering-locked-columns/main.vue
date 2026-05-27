<template>
  <Grid
    :data-items="result"
    :take="dataState.take"
    :skip="dataState.skip"
    :sort="dataState.sort"
    :filter="dataState.filter"
    @datastatechange="dataStateChange"
    @columnreorder="handleColumnReorder"
    :columns="lockedColumns"
    :sortable="true"
    :pageable="true"
    :reorderable="true"
    :page-size="8"
    :style="{ width: '500px' }"
  >
    <template #myTemplate="{ props }">
      <div>
        <ColumnMenu
          :column="props.column"
          :filterable="props.filterable"
          :filter="props.filter"
          :sortable="props.sortable"
          :sort="props.sort"
          :columns="columns"
          :locked="isColumnLocked(props.column.field)"
          @sortchange="props.onSortchange"
          @lockchange="(e) => lockChange(e, props.column)"
          @visibilitychange="(e) => visibilityChange(e, props.column)"
          @filterchange="props.onFilterchange"
          @closemenu="props.onClosemenu"
          @contentfocus="props.onContentfocus"
          @columnssubmit="onColumnsSubmit"
        />
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import ColumnMenu from './ColumnMenu.vue';
import { products } from './products.js';

const dataState = ref({
    take: 8,
    skip: 0,
    sort: [],
    filter: null,
});

const columns = ref([
    {
        title: 'Product Id',
        field: 'ProductID',
        filter: 'numeric',
        locked: true,
        columnMenu: 'myTemplate',
        hidden: false,
        width: 100,
    },
    {
        title: 'Product Name',
        field: 'ProductName',
        filter: 'text',
        locked: false,
        columnMenu: 'myTemplate',
        hidden: false,
        width: 200,
    },
    {
        title: 'Quantity Per Unit',
        field: 'QuantityPerUnit',
        filter: 'numeric',
        locked: false,
        columnMenu: 'myTemplate',
        hidden: false,
        width: 100,
    },
    {
        title: 'Unit Price',
        field: 'UnitPrice',
        filter: 'numeric',
        locked: false,
        columnMenu: 'myTemplate',
        hidden: false,
        width: 100,
    },
    {
        title: 'Units In Stock',
        field: 'UnitsInStock',
        filter: 'numeric',
        locked: false,
        columnMenu: 'myTemplate',
        hidden: false,
        width: 100,
    },
    {
        title: 'Discontinued',
        field: 'Discontinued',
        filter: 'boolean',
        locked: false,
        columnMenu: 'myTemplate',
        hidden: false,
        width: 100,
    },
]);

const result = ref(process(products.slice(0), dataState.value));

const lockedColumns = computed(() => {
    const locked = columns.value.filter((col) => col.locked);
    return locked.length
        ? [...columns.value].sort((a, b) => Number(b.locked) - Number(a.locked))
        : columns.value;
});

const dataStateChange = (event) => {
    dataState.value = event.data;
    result.value = process(products.slice(0), dataState.value);
};

const handleColumnReorder = (event) => {
    const lastLockedIndex = lockedColumns.value.findLastIndex((col) => col.locked);
    columns.value = event.columns.map((col) => ({
        ...col,
        locked:
      event.prev > lastLockedIndex && event.next <= lastLockedIndex
          ? true
          : event.prev <= lastLockedIndex && event.next > lastLockedIndex
              ? false
              : col.locked,
    }));
};

const isColumnLocked = (field) => {
    return columns.value.find((col) => col.field === field)?.locked || false;
};

const lockChange = (state, column) => {
    const targetColumn = columns.value.find((col) => col.field === column.field);
    if (targetColumn) targetColumn.locked = state;
};

const visibilityChange = (state, column) => {
    const targetColumn = columns.value.find((col) => col.field === column.field);
    if (targetColumn) targetColumn.hidden = state;
};

const onColumnsSubmit = (columnsState) => {
    columns.value = columnsState;
};
</script>
