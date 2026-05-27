<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :tableProps="{ style: { tableLayout: 'fixed' } }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :data-items="tree"
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
    {
        field: 'Personal Information',
        children: [
            { field: 'name', title: 'Name', width: '300px', expandable: true },
            {
                title: 'Contact Information',
                children: [
                    { field: 'phone', title: 'Phone', width: '200px' },
                    { field: 'extension', title: 'Extension', width: '200px' },
                ],
            },
        ],
    },
    {
        title: 'Employee Details',
        children: [
            { field: 'position', title: 'Position', width: '300px' },
            { field: 'fullTime', title: 'Full Time', width: '100px' },
        ],
    },
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
</script>
