<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="dataItems"
      :value="value"
      @change="onChange"
      :data-item-key="dataItemKey"
      :text-field="textField"
      :default-item="defaultItem"
      :filterable="true"
      @filterchange="onFilterChange"
      :virtual="virtual"
      @pagechange="pageChange"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const textField = 'ContactName';
const dataItemKey = 'CustomerID';
const defaultItem = { [textField]: 'Select customer...', [dataItemKey]: null };
const emptyItem = { [textField]: 'loading ...' };
const pageSize = 10;

const dataItems = ref([]);
const skip = ref(0);
const total = ref(0);
const value = ref(null);
const filter = ref('');
const dataCaching = ref([]);
const loadingData = Array.from({ length: pageSize }, () => ({ ...emptyItem }));

let baseUrl = `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`;
let init = { method: 'GET', accept: 'application/json', headers: [] };
let pendingRequest;
let requestStarted = false;

const virtual = computed(() => ({
    pageSize,
    skip: skip.value,
    total: total.value,
}));

function requestData(skipValue, filterValue) {
    if (requestStarted) {
        clearTimeout(pendingRequest);
        pendingRequest = setTimeout(() => requestData(skipValue, filterValue), 50);
        return;
    }

    const url =
    baseUrl +
    `Customers?$filter=contains(ContactName,'${filterValue}')&$skip=${skipValue}&$top=${pageSize}&$count=true`;

    requestStarted = true;
    fetch(url, init)
        .then((response) => response.json())
        .then((json) => {
            const totalValue = json['@odata.count'];
            const fetchedItems = json.value.map((element, index) => {
                const { CustomerID, ContactName } = element;
                const item = { [dataItemKey]: CustomerID, [textField]: ContactName };
                dataCaching.value[index + skipValue] = item;
                return item;
            });

            if (skipValue === skip.value) {
                dataItems.value = fetchedItems;
                total.value = totalValue;
            }
            requestStarted = false;
        });
}

function onFilterChange(event) {
    const filterValue = event.filter.value;

    resetCache();
    requestData(0, filterValue);

    dataItems.value = loadingData;
    skip.value = 0;
    filter.value = filterValue;
}

function pageChange(event) {
    const skipValue = event.page.skip;

    if (dataCaching.value.slice(skipValue, skipValue + pageSize).some((item) => !item)) {
        requestData(skipValue, filter.value || '');
    }

    dataItems.value = getCachedData(skipValue);
    skip.value = skipValue;
}

function onChange(event) {
    const selectedValue = event.value;
    if (selectedValue && selectedValue[textField] === emptyItem[textField]) {
        return;
    }
    value.value = selectedValue;
}

function getCachedData(skipValue) {
    return Array.from({ length: pageSize }, (_, i) =>
        dataCaching.value[i + skipValue] || { ...emptyItem }
    );
}

function resetCache() {
    dataCaching.value.length = 0;
}

onMounted(() => {
    requestData(0, '');
});

onBeforeUnmount(() => {
    resetCache();
});
</script>
