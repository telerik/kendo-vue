<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :data-items="processedData"
      :selected-field="selectedField"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      :data-item-key="dataItemKey"
      @selectionchange="onSelectionChange"
      @headerselectionchange="onHeaderSelectionChange"
      @expandchange="onExpandChange"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import dataItems from './data';
import {
    TreeList,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const DATA_ITEM_KEY = 'id';
const SUB_ITEMS_FIELD = 'employees';
const EXPAND_FIELD = 'expanded';
const SELECTED_FIELD = 'selected';

const expanded = ref({ 1: true, 2: true, 32: true });
const selected = ref({});
const dataItemKey = DATA_ITEM_KEY;
const subItemsField = SUB_ITEMS_FIELD;
const expandField = EXPAND_FIELD;
const selectedField = SELECTED_FIELD;

const columns = computed(() => [
    {
        field: 'selected',
        width: '7%',
        headerSelectionValue: headerSelectionValue.value,
    },
    { field: 'name', title: 'Name', expandable: true, width: '31%' },
    { field: 'position', title: 'Position', width: '31%' },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '31%' },
]);

const headerSelectionValue = computed(() => {
    let allSelected = true;
    mapTree(dataItems, subItemsField, (item) => {
        allSelected = allSelected && selected.value[item[DATA_ITEM_KEY]];
        return item;
    });
    return allSelected;
});

const processedData = computed(() => {
    return addExpandField(dataItems);
});

function onExpandChange(e) {
    expanded.value = {
        ...expanded.value,
        [e.dataItem.id]: !e.value,
    };
}

function onSelectionChange(e) {
    selected.value = {
        ...selected.value,
        [e.dataItem.id]: e.event.target.checked ? true : undefined,
    };
}

function onHeaderSelectionChange(event) {
    const checkboxElement = event.event.target;
    const checked = checkboxElement.checked;
    const newSelectedState = {};
    mapTree(dataItems, subItemsField, (item) => {
        newSelectedState[item.id] = checked ? true : undefined;
        return item;
    });
    selected.value = newSelectedState;
}

function addExpandField(dataTree) {
    return mapTree(dataTree, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value[item.id],
            [selectedField]: selected.value[item.id],
        })
    );
}
</script>

