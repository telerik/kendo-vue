<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :navigatable="true"
      :data-items="processedData"
      :edit-field="editField"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @rowclick="rowClick"
      @itemchange="onItemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
    >
      <template #toolbar>
        <div @click="closeEdit">
          <KButton title="Add new" theme-color="primary" @click="addRecord">
            Add new
          </KButton>
        </div>
      </template>
      <template #textEditor="{ props }">
        <TreeListTextEditor v-bind="props" @change="props.onChange" />
      </template>
      <template #numericEditor="{ props }">
        <TreeListNumericEditor v-bind="props" @change="props.onChange" />
      </template>
      <template #dateEditor="{ props }">
        <TreeListDateEditor v-bind="props" @change="props.onChange" />
      </template>
      <template #booleanEditor="{ props }">
        <TreeListBooleanEditor v-bind="props" @change="props.onChange" />
      </template>
    </TreeList>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListTextEditor,
    TreeListNumericEditor,
    TreeListDateEditor,
    TreeListBooleanEditor,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';
const expanded = ref([1, 2, 32]);
const editId = ref(null);
const dataItems = ref(employees.slice());

const columns = [
    {
        field: 'name',
        title: 'Name',
        width: '280px',
        editor: 'text',
        editCell: 'textEditor',
        expandable: true,
    },
    { field: 'position', title: 'Position', width: '260px', editCell: 'textEditor' },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '170px', editCell: 'dateEditor' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '170px', editCell: 'numericEditor' },
    { field: 'fullTime', title: 'Full Time', width: '160px', editCell: 'booleanEditor' },
];

const processedData = computed(() => {
    return mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
            [editField]: item.id === editId.value,
        })
    );
});

function rowClick(event) {
    editId.value = editId.value === event.dataItem.id ? null : event.dataItem.id;
}

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}

function onItemChange(event) {
    const field = event.field;
    dataItems.value = mapTree(dataItems.value, subItemsField, (item) =>
        item.id === event.dataItem.id
            ? extendDataItem(item, subItemsField, { [field]: event.value })
            : item
    );
}

function closeEdit(event) {
    if (event.target === event.currentTarget) {
        editId.value = null;
    }
}

function addRecord() {
    const newRecord = { id: new Date().getTime() };
    dataItems.value = [newRecord, ...dataItems.value];
    editId.value = newRecord.id;
}
</script>
