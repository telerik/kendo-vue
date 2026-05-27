<template>
  <div class="example-wrapper">
    <div>
      <div>Favorite sports:</div>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="subsetData"
        :text-field="'text'"
        :data-item-key="'id'"
        :virtual="virtual"
        :filterable="true"
        @filterchange="onFilterChange"
        @pagechange="pageChange"
        :popup-settings="{ height: '250px' }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const total = 5000;
const pageSize = 10;
const allData = Array.from({ length: total }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
}));

const subsetData = ref(allData.slice(0, pageSize));
const skip = ref(0);
const totalItems = ref(total);
const filteredData = ref([...allData]);

const virtual = computed(() => ({
    total: totalItems.value,
    pageSize,
    skip: skip.value,
}));

function onFilterChange(event) {
    const filter = event.filter;
    filteredData.value = filterBy(allData.slice(), filter);

    subsetData.value = filteredData.value.slice(0, pageSize);
    skip.value = 0;
    totalItems.value = filteredData.value.length;
}

function pageChange(event) {
    const { skip: newSkip, take } = event.page;
    subsetData.value = filteredData.value.slice(newSkip, newSkip + take);
    skip.value = newSkip;
}
</script>
