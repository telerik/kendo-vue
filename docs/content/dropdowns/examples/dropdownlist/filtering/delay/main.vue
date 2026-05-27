<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="items"
      :text-field="'text'"
      :filterable="true"
      @filterchange="filterChange"
      :loading="loading"
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
const delay = 500;

const items = ref(allData.slice());
const loading = ref(false);
let timeout;

function filterChange(event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        items.value = filterData(event.filter);
        loading.value = false;
    }, delay);

    loading.value = true;
}

function filterData(filter) {
    return filterBy(allData.slice(), filter);
}
</script>
