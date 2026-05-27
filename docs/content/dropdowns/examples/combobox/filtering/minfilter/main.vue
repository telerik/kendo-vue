<template>
  <ComboBox
    :style="{ width: '230px' }"
    :data-items="items"
    :text-field="'text'"
    :filterable="true"
    @filterchange="filterChange"
  />
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

const items = ref([...source]);

function filterChange(event) {
    const newData =
    event.filter.value.length > 3
        ? filterBy(source, event.filter)
        : [...source];

    items.value = newData;
}
</script>
