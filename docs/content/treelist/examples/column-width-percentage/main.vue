<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto', width: '70%' }"
      :table-props="{ style: { width: '900px' } }"
      :navigatable="true"
      :data-items="processedData"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import {
    TreeList,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const dataItems = ref(employees.slice());

const columns = [
    { field: 'name', title: 'Name', width: '40%', expandable: true },
    { field: 'position', title: 'Position', width: '40%' },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '20%' },
];

const processedData = computed(() =>
    mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    )
);

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}
</script>
