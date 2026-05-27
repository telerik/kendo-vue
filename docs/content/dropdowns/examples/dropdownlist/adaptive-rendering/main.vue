<template>
  <div>
    <div>T-shirt size:</div>
    <DropDownList
      :data-items="data"
      text-field="text"
      data-item-key="id"
      filterable
      @filterchange="handleFilterchange"
      adaptive
      adaptive-title="Choose size"
      :style="{ width: '300px' }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const allData = [
    { id: 1, text: 'Small' },
    { id: 2, text: 'Medium' },
    { id: 3, text: 'Large' },
];

const data = ref(allData);

function filterData(filter) {
    return filterBy(allData, filter);
}

function handleFilterchange(event) {
    data.value = filterData(event.filter);
}
</script>
