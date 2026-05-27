<template>
  <div>
    <TreeList
      @pagechange="onPageChange"
      :skip="skip"
      :take="take"
      :pageable="true"
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
import { generateData } from './treelist-data';
import {
    TreeList,
    mapTreeItem,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const numberOfColumns = 4;
const columnWidth = 200;
const numberOfRows = 5000;
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
const skip = ref(0);
const take = ref(8);

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

function onPageChange(event) {
    skip.value = event.skip;
    take.value = event.take;
}
</script>
