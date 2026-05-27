<template>
  <TreeList
    :style="{ maxHeight: '510px', overflow: 'auto' }"
    :expand-field="expandField"
    :sub-items-field="subItemsField"
    :data-items="dataItems"
    :columns="columns"
  />
</template>

<script setup>
import dataItems from './simple-data';
import { TreeList } from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const columns = [
    { field: 'name', title: 'Name', width: '250px', expandable: true },
    { field: 'title', title: 'Title' },
];
</script>
