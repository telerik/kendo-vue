<template>
  <Grid
    style="height: 440px;"
    :data-items="items"
    :columns="columns"
    :total="total"
    :row-height="40"
    :skip="skip"
    :scrollable="'virtual'"
    @pagechange="pageChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const requestInProgress = ref(false);
const pageSize = 20;
const baseUrl =
  'https://demos.telerik.com/service/v2/odata/Orders?$count=true&$top=60&$skip=';
const init = { method: 'GET', accept: 'application/json', headers: {} };
const orders = ref([]);
const items = ref([]);
const total = ref(0);
const skip = ref(0);
const columns = [
    { field: 'Index', title: 'Index', width: '70px' },
    { field: 'OrderID', title: 'Order Id', width: '100px' },
    { field: 'ShipCountry', title: 'Ship Country' },
    { field: 'ShipName', title: 'Ship Name' },
];

function pageChange(event) {
    requestIfNeeded(event.page.skip);
    skip.value = event.page.skip;
    items.value = orders.value.slice(skip.value, skip.value + pageSize);
}

function requestIfNeeded(skipValue) {
    for (
        let i = skipValue;
        i < skipValue + pageSize && i < orders.value.length;
        i++
    ) {
        if (orders.value[i]?.OrderID === undefined) {
            requestData(skipValue);
            return;
        }
    }
}

function requestData(skipParameter) {
    if (requestInProgress.value) {
        return;
    }
    requestInProgress.value = true;
    const skipValue = Math.max(skipParameter - pageSize, 0);

    fetch(baseUrl + skipValue, init)
        .then((response) => response.json())
        .then((json) => {
            requestInProgress.value = false;

            const totalValue = json['@odata.count'];
            const data = json['value'];
            const ordersArray = new Array(totalValue)
                .fill()
                .map((_, i) => ({ Index: i }));

            data.forEach((order, i) => {
                ordersArray[i + skipValue] = { Index: i + skipValue, ...order };
            });

            requestIfNeeded(skip.value);
            orders.value = ordersArray;
            items.value = orders.value.slice(skip.value, skip.value + pageSize);
            total.value = totalValue;
        });
}

requestData(0); // Request the first page on initial load
</script>
