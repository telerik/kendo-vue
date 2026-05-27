<template>
  <ComboBox
    :style="{ width: '230px' }"
    :data-items="items"
    :text-field="'text'"
    :filterable="true"
    @filterchange="filterChange"
    :loading="loading"
  ></ComboBox>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = [
    { text: 'Small', id: 1 },
    { text: 'Medium', id: 2 },
    { text: 'Large', id: 3 },
];
const delay = 500;

const items = ref(source.slice());
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
    return filterBy(source.slice(), filter);
}
</script>
