<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :data-items="tree"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @rowdrop="onRowDrop"
      :reordable-rows="true"
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
    moveTreeItem,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 3]);
const dataItems = ref([...employees]);

const columns = [
    { field: 'name', title: 'Name', width: '34%', expandable: true },
    { field: 'position', title: 'Position', width: '33%' },
];

const tree = computed(() =>
    mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    )
);

const treeListStyles = {
    maxHeight: '540px',
    overflow: 'auto',
    width: '100%',
};

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}

function onRowDrop(event) {
    dataItems.value = moveTreeItem(
        dataItems.value,
        event.dragged,
        event.draggedOver,
        subItemsField
    );
}
</script>

