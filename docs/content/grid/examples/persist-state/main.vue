<template>
  <div>
    <Grid
      :style="{ height: '700px' }"
      :sortable="true"
      :sort="dataState?.sort"
      :filterable="true"
      :resizable="true"
      :reorderable="true"
      :pageable="{ buttonCount: 4, pageSizes: true }"
      :data-items="processedData"
      :filter="dataState?.filter"
      :columns-state="columnsState"
      :columns="columns"
      :skip="dataState?.skip"
      :take="dataState?.take"
      @filterchange="onFilterChange"
      @columnsstatechange="onColumnsStateChange"
      @datastatechange="onDataStateChange"
      @pagechange="onPageChange"
    >
        <GridToolbar >
          <KButton
            title="Export to Excel"
            :theme-color="'primary'"
            type="button"
            @click="saveStateToLocalStorage"
          >
            Save Data
          </KButton>
          &nbsp;
          <KButton :theme-color="'primary'" type="button" @click="loadStateFromLocalStorage" title="Load Data">
            Load Data
          </KButton>
        </GridToolbar>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Grid,
  GridToolbar
} from '@progress/kendo-vue-grid';
import type {
  GridDataStateChangeEvent,
  GridFilterChangeEvent,
  GridColumnsStateChangeEvent
} from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { process } from '@progress/kendo-data-query';
import orders from './gd-orders';

const formattedOrders = orders.map((order) => {
  const orderDate = order.orderDate && order.orderDate.substring(0, 10);
  const shippedDate = order.shippedDate && order.shippedDate.substring(0, 10);
  return { ...order, orderDate, shippedDate };
});

const dataState = ref<any>({
  sort: [{ field: 'orderDate', dir: 'desc' }],
  skip: 0,
  take: 20,
  filter: { logic: 'and', filters: [] }
});

const columns = ref([
  { field: 'customerID', width: 200 },
  { field: 'orderDate', width: 200 },
  { field: 'shipName', width: 200 },
  { field: 'freight', width: 200 },
  { field: 'shippedDate', width: 200 },
  { field: 'employeeID', width: 200 },
  { field: 'orderID', width: 200 }
]);

const loadedColumns = localStorage.getItem('gridColumns');
const columnsState = ref<any>(loadedColumns ? JSON.parse(loadedColumns) : null);

const saveStateToLocalStorage = () => {
  const state = {
    dataState: dataState.value,
    columnsState: columnsState.value
  };
  localStorage.setItem('gridState', JSON.stringify(state));
};

const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem('gridState');

  if (savedState) {
    const { dataState: savedDataState, columnsState: savedColumns } = JSON.parse(savedState);
    dataState.value = savedDataState;
    columnsState.value = savedColumns;
  }
};

const onColumnsStateChange = (event: GridColumnsStateChangeEvent) => {
  columnsState.value = event.columnsState;
};

const onDataStateChange = (event: GridDataStateChangeEvent) => {
  const { dataState: newDataState } = event;
  if (newDataState) {
    const { filter, sort, skip, take } = newDataState;
    const updatedFilter = filter || dataState.value.filter;
    const updatedSkip = skip !== undefined ? skip : dataState.value.skip;
    const updatedTake = take !== undefined ? take : dataState.value.take;
    dataState.value = {
      ...dataState.value,
      filter: updatedFilter,
      sort,
      skip: updatedSkip,
      take: updatedTake
    };
  }
};

const onFilterChange = (event: GridFilterChangeEvent) => {
  const newFilter = event.filter ? { ...event.filter } : { logic: 'and', filters: [] };
  dataState.value = {
    ...dataState.value,
    filter: newFilter
  };
};

const onPageChange = (event: any) => {
  const newSkip = event.page.skip;
  const newTake = event.page.take;
  dataState.value = {
    ...dataState.value,
    skip: newSkip,
    take: newTake
  };
};

onMounted(() => {
  saveStateToLocalStorage();
});

const processedData = computed(() =>
  process(formattedOrders, dataState.value)
);
</script>
