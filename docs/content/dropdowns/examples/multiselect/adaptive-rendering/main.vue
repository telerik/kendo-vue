<template>
  <div>
    <div>T-shirt size:</div>
    <MultiSelect
      :data-items="data"
      :text-field="'text'"
      :data-item-key="'id'"
      :filterable="true"
      @filterchange="handleFilterChange"
      :adaptive="true"
      :adaptive-title="'Choose size'"
      :style="{ width: '300px' }"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const allData = [
    { id: 1, text: "Small" },
    { id: 2, text: "Medium" },
    { id: 3, text: "Large" },
];
const data = ref(allData);

function handleFilterChange(event) {
    data.value = filterBy(allData, event.filter);
}
</script>
