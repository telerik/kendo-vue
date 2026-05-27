<template>
  <MultiSelect
    :data-items="groupedData"
    :text-field="'name'"
    :data-item-key="'id'"
    :group-field="'position'"
    :style="{ width: '300px' }"
  />
</template>

<script setup>
import { ref } from 'vue';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import { employees } from './grouping-data.js';

const groupedData = ref(
    groupBy(employees, [{ field: 'position' }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    )
);
</script>
