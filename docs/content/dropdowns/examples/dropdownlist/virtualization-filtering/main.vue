<template>
  <DropDownList
    :style="{ width: '230px' }"
    :data-items="subsetData"
    :data-item-key="'id'"
    :text-field="'text'"
    :filterable="true"
    @filterchange="onFilterChange"
    :virtual="virtual"
    :popup-settings="popupSettings"
    @pagechange="pageChange"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const total = 5000;
const pageSize = 11;
const allData = Array.from({ length: total }, (_, i) => ({ id: i, text: `Item ${i}` }));

const filteredData = ref([...allData]);
const skip = ref(0);
const subsetData = ref(allData.slice(0, pageSize));
const popupSettings = ref({ height: "210px" });

const virtual = computed(() => ({
    total: filteredData.value.length,
    pageSize,
    skip: skip.value,
}));

function onFilterChange(event) {
    filteredData.value = filterBy(allData, event.filter);
    subsetData.value = filteredData.value.slice(0, pageSize);
    skip.value = 0;
}

function pageChange(event) {
    const { skip: newSkip, take } = event.page;
    subsetData.value = filteredData.value.slice(newSkip, newSkip + take);
    skip.value = newSkip;
}
</script>
