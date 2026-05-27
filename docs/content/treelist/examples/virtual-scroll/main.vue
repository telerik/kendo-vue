<template>
  <div>
    <TreeList
      :wrapperStyle="{ height: '430px', overflow: 'auto', width: '720px' }"
      :tableProps="{ style: { tableLayout: 'fixed', width: numberOfColumns * columnWidth + 'px' } }"
      :row-height="40"
      :scrollable="'virtual'"
      :column-virtualization="numberOfColumns > 15"
      :data-items="dataItems"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    TreeList,
    mapTreeItem,
    extendDataItem,
} from '@progress/kendo-vue-treelist';
import { generateData } from './treelist-data';

const numberOfColumns = 100;
const columnWidth = 200;
const numberOfRows = 25000;
const subItemsField = 'subItems';
const expandField = 'expanded';
const { columns, data } = generateData(
    numberOfColumns,
    columnWidth,
    numberOfRows,
    subItemsField
);

const dataItems = ref([...data]);
const expanded = ref([]);

function onExpandChange(event) {
    const expandedValue = !event.value;
    const tree = [...dataItems.value];
    mapTreeItem(tree, event.level, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expandedValue,
        })
    );
    dataItems.value = tree;
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}
</script>
