<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="items"
      :text-field="'text'"
      :filterable="true"
      @filterchange="filterChange"
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

const items = ref(allData.slice());

function filterChange(event) {
    items.value = filterData(event.filter);
}

function filterData(filter) {
    return filterBy(allData.slice(), filter);
}
</script>
