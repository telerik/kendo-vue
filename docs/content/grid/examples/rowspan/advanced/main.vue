<template>
  <Grid
    :style="{ height: '520px' }"
    data-item-key="ProductID"
    :data-items="processedData"
    :row-spannable="true"
    :sort="state.sort"
    :filter="state.filter"
    :group="state.group"
    :skip="state.skip"
    :take="state.take"
    :sortable="true"
    :filterable="true"
    :groupable="true"
    :pageable="true"
    :columns="[
      { field: 'orderID', title: 'Order ID' },
      { field: 'customerID', title: 'Customer ID' },
      { field: 'employeeID', title: 'Employee ID', rowSpannable: false },
      { field: 'shipVia', title: 'Ship Via', rowSpannable: { valueGetter: (dataItem) => `${dataItem.shipVia} - ${dataItem.customerID}` } },
      { field: 'freight', title: 'Freight' }
    ]"
    @datastatechange="handleDataStateChange"
  >
  </Grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import type { GridDataStateChangeEvent } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import type { State } from '@progress/kendo-data-query';
import orders from './orders';

const state = ref<State>({
  sort: [{ field: 'customerID', dir: 'asc' }]
});

const processedData = computed(() => process(orders, state.value));

const handleDataStateChange = (event: GridDataStateChangeEvent) => {
  state.value = event.dataState;
};
</script>
