<template>
  <DropDownList
    :style="{ width: '230px' }"
    :data-items="sports"
    :text-field="'text'"
    :default-item="defaultItem"
  />
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sports = [
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 },
];

const defaultItem = { text: 'Select sport ...' };
</script>
