<template>
  <div>
    <p>Customers</p>
    <MultiSelect
      :data-items="items"
      :text-field="textField"
      :data-item-key="dataItemKey"
      :placeholder="placeholder"
      :filterable="true"
      @filterchange="onFilterChange"
      :virtual="virtual"
      @pagechange="pageChange"
      :style="{ width: '300px' }"
    />
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const textField = "ContactName";
const dataItemKey = "CustomerID";
const placeholder = "Select customer";
const pageSize = 10;
const emptyItem = { [textField]: "loading ..." };

const loadingData = Array.from({ length: pageSize }, () => ({ ...emptyItem }));
const baseUrl = `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`;
const init = { method: "GET", accept: "application/json", headers: [] };
const dataCaching = [];
let pendingRequest;
let requestStarted = false;

const items = ref([]);
const skip = ref(0);
const total = ref(0);
const filter = ref("");

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

    const url = `${baseUrl}Customers?$filter=contains(ContactName,'${filterValue}')&$skip=${skipValue}&$top=${pageSize}&$count=true`;

    requestStarted = true;
    fetch(url, init)
        .then((response) => response.json())
        .then((json) => {
            const totalValue = json["@odata.count"];
            const itemsValue = json.value.map(({ CustomerID, ContactName }, index) => {
                const item = { [dataItemKey]: CustomerID, [textField]: ContactName };
                dataCaching[index + skipValue] = item;
                return item;
            });

            if (skipValue === skip.value) {
                items.value = itemsValue;
                total.value = totalValue;
            }
            requestStarted = false;
        });
}

function onFilterChange(event) {
    const filterValue = event.filter.value;
    resetCache();
    requestData(0, filterValue);
    items.value = loadingData;
    skip.value = 0;
    filter.value = filterValue;
}

function pageChange(event) {
    const skipValue = event.page.skip;
    const filterValue = filter.value;

    if (!dataCaching.slice(skipValue, skipValue + pageSize).every(Boolean)) {
        requestData(skipValue, filterValue || "");
    }

    items.value = getCachedData(skipValue);
    skip.value = skipValue;
}

function getCachedData(skipValue) {
    return Array.from({ length: pageSize }, (_, i) => dataCaching[i + skipValue] || { ...emptyItem });
}

function resetCache() {
    dataCaching.length = 0;
}

onMounted(() => requestData(0, ""));
onUnmounted(() => resetCache());
</script>
