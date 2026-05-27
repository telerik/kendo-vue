<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :reorderable="true"
      :data-items="tree"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @columnreorder="onColumnReorder"
      @expandchange="onExpandChange"
      :columns="columns"
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

const dataItems = ref([...employees]);
const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const columns = ref([
    { field: 'name', title: 'Name', width: '310px', expandable: true },
    { field: 'position', title: 'Position', width: '260px' },
    { field: 'hireDate', title: 'Hire Date', width: '160px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '160px' },
    { field: 'fullTime', title: 'Full Time', width: '150px' },
]);

const tree = computed(() => {
    return mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    );
});

const treeListStyles = {
    maxHeight: '510px',
    overflow: 'auto',
};

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}

function onColumnReorder(event) {
    columns.value = event.columns;
}
</script>

