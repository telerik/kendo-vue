<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :navigatable="true"
      :data-items="processedData"
      :edit-field="editField"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @itemchange="onItemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
    >
      <template #toolbar>
        <KButton title="Add new" theme-color="primary" @click="addRecord">
          Add new
        </KButton>
      </template>
      <template #commandCell="{ props }">
        <CommandCell
          :data-item="props.dataItem"
          :edit-field="editField"
          @edit="enterEdit"
          @save="save"
          @remove="remove"
          @cancel="cancel"
          @addchild="addChild"
        />
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
import CommandCell from './CommandCell.vue';
import {
    TreeList,
    mapTree,
    extendDataItem,
    modifySubItems,
    removeItems,
    TreeListTextEditor,
    TreeListNumericEditor,
    TreeListDateEditor,
    TreeListBooleanEditor,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';
const expanded = ref([1, 2, 32]);
const inEdit = ref([]);
const dataItems = ref(employees.slice());

const columns = [
    {
        field: 'name',
        title: 'Name',
        width: '280px',
        editCell: 'textEditor',
        expandable: true,
    },
    { field: 'position', title: 'Position', width: '260px', editCell: 'textEditor' },
    { field: 'fullTime', title: 'Full Time', width: '160px', editCell: 'booleanEditor' },
    { cell: 'commandCell', width: '360px' },
];

const processedData = computed(() => {
    return mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
            [editField]: Boolean(inEdit.value.find((i) => i.id === item.id)),
        })
    );
});

function addChild(dataItem) {
    const newRecord = createNewItem();
    inEdit.value = [...inEdit.value, newRecord];
    expanded.value = [...expanded.value, dataItem.id];
    dataItems.value = modifySubItems(
        dataItems.value,
        subItemsField,
        (item) => item.id === dataItem.id,
        (subItems) => [newRecord, ...subItems]
    );
}

function enterEdit(dataItem) {
    inEdit.value = [...inEdit.value, extendDataItem(dataItem, subItemsField)];
}

function save(dataItem) {
    const itemToSave = {
        ...dataItem,
        inEdit: false,
    };
    dataItems.value = mapTree(dataItems.value, subItemsField, (item) =>
        item.id === itemToSave.id ? itemToSave : item
    );

    inEdit.value = inEdit.value.filter((i) => i.id !== itemToSave.id);
}

function cancel(editedItem) {
    if (editedItem.isNew) {
        return remove(editedItem);
    }
    dataItems.value = mapTree(dataItems.value, subItemsField, (item) =>
        item.id === editedItem.id ? inEdit.value.find((i) => i.id === item.id) : item
    );
    inEdit.value = inEdit.value.filter((i) => i.id !== editedItem.id);
}

function remove(dataItem) {
    dataItems.value = removeItems(dataItems.value, subItemsField, (i) => i.id === dataItem.id);
    inEdit.value = inEdit.value.filter((i) => i.id !== dataItem.id);
}

function onExpandChange(e) {
    expanded.value = e.value
        ? expanded.value.filter((id) => id !== e.dataItem.id)
        : [...expanded.value, e.dataItem.id];
}

function onItemChange(event) {
    const field = event.field;
    dataItems.value = mapTree(dataItems.value, subItemsField, (item) =>
        item.id === event.dataItem.id
            ? extendDataItem(item, subItemsField, { [field]: event.value })
            : item
    );
}

function addRecord() {
    const newRecord = createNewItem();
    dataItems.value = [newRecord, ...dataItems.value];
    inEdit.value = [...inEdit.value, { ...newRecord }];
}

function createNewItem() {
    const timestamp = new Date().getTime();
    return { id: timestamp, isNew: true };
}
</script>
