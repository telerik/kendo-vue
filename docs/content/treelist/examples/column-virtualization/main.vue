<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :table-props="{ style: { tableLayout: 'fixed' } }"
      :columns="columns"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :data-items="tree"
      :column-virtualization="true"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { generateData } from './treelist-data';
import {
    TreeList,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const numberOfColumns = 100;
const columnWidth = 150;
const numberOfRows = 7;
const subItemsField = 'subItems';
const expandField = 'expanded';
const { columns, data } = generateData(
    numberOfColumns,
    columnWidth,
    numberOfRows,
    subItemsField
);

const expanded = ref([]);
const dataItems = ref([...data]);

const tree = computed(() =>
    mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    )
);

const treeListStyles = {
    overflow: 'auto',
    width: '720px',
};

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}
</script>
