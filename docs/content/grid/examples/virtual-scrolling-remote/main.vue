<template>
  <Grid
    :style="{ height: '440px' }"
    :row-height="50"
    :data-items="orders.slice(page.skip, page.skip + pageSize)"
    :page-size="pageSize"
    :total="total"
    :skip="page.skip"
    scrollable="virtual"
    @pagechange="pageChange"
    :data-item-key="'OrderID'"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Skeleton } from '@progress/kendo-vue-indicators';

const requestInProgress = ref(false);
const pageSize = 25;
const total = 830;
const baseUrl = `https://demos.telerik.com/service/v2/odata/Orders?$count=true&$top=60&$skip=`;
const init = {
  method: 'GET',
  accept: 'application/json',
  headers: {}
};

const orders = ref([]);
const page = ref({
  skip: 0,
  take: pageSize
});

const requestIfNeeded = (skip) => {
  for (let i = skip; i < skip + pageSize && i < orders.value.length; i++) {
    if (orders.value[i].OrderID === undefined) {
      // request data only if not already fetched
      requestData(skip);
      return;
    }
  }
};

const requestData = (skipParameter) => {
  if (requestInProgress.value) {
    // perform only one request at a time
    return;
  }
  requestInProgress.value = true;
  const skip = Math.max(skipParameter - pageSize, 0); // request the prev page as well
  fetch(baseUrl + skip, init)
    .then((response) => response.json())
    .then((json) => {
      requestInProgress.value = false;
      const data = json['value'];
      const newOrders =
        orders.value.length === total
          ? [...orders.value]
          : new Array(total).fill({}).map((e, i) => ({
              Index: i
            }));
      data.forEach((order, i) => {
        newOrders[i + skip] = {
          Index: i + skip,
          ...order
        };
      });
      orders.value = newOrders;
    });
};

watch(() => orders.value, () => {
  requestIfNeeded(page.value.skip);
});

onMounted(() => {
  // request the first page on initial load
  requestData(0);
});

const pageChange = (event) => {
  requestIfNeeded(event.page.skip);
  page.value = event.page;
};

const LoadingCell = (h, tdElement, props, listeners) => {
  const field = props.field || '';

  if (props.dataItem[field] === undefined) {
    // shows loading cell if no data
    return h(
      'td',
      {},
      [
        h(Skeleton, {
          shape: 'text',
          style: {
            width: '100%'
          }
        })
      ]
    );
  }
  // default rendering for this cell
  return tdElement;
};

const columns = [
  { field: 'Index', title: 'Index', width: '100px', cell: LoadingCell },
  { field: 'OrderID', title: 'Order Id', width: '100px', cell: LoadingCell },
  { field: 'ShipCountry', title: 'Ship Country', cell: LoadingCell },
  { field: 'ShipName', title: 'Ship Name', cell: LoadingCell }
];
</script>
