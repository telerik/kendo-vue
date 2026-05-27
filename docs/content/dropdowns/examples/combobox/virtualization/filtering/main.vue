<template>
  <ComboBox
    :style="{ width: '230px' }"
    :data-items="subsetData"
    data-item-key="id"
    text-field="text"
    :virtual="virtual"
    @pagechange="pageChange"
    :popup-settings="popupSettings"
    filterable
    @filterchange="onFilterChange"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const total = 5000;
const pageSize = 12;
const allData = Array.from({ length: total }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
}));

const subsetData = ref(allData.slice(0, pageSize));
const skip = ref(0);
const totalItems = ref(total);
const popupSettings = ref({ height: '250px' });
const filteredData = ref(allData);

const virtual = computed(() => ({
    total: totalItems.value,
    pageSize,
    skip: skip.value,
}));

function onFilterChange(event) {
    filteredData.value = filterBy(allData, event.filter);
    subsetData.value = filteredData.value.slice(0, pageSize);
    skip.value = 0;
    totalItems.value = filteredData.value.length;
}

function pageChange(event) {
    const { skip: newSkip, take } = event.page;
    subsetData.value = allData.slice(newSkip, newSkip + take);
    skip.value = newSkip;
}
</script>
