<template>
  <ComboBox
    :style="{ width: '230px' }"
    :data-items="items"
    :text-field="'text'"
    :filterable="true"
    @filterchange="filterChange"
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

const items = ref(source.slice());

function filterChange(event) {
    items.value = filterData(event.filter);
}

function filterData(filter) {
    return filterBy(source.slice(), filter);
}
</script>
