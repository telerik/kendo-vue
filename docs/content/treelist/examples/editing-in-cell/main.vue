<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :navigatable="true"
      :dataItems="processedData"
      :editField="editField"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @rowmousedown="handleRowMousedown"
      @rowfocus="handleRowFocus"
      @rowblur="handleRowBlur"
      @cellclick="handleCellClick"
      @itemchange="itemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
    >
      <template #toolbar>
        <div>
          <KButton
            :title="'Save Changes'"
            @click="saveChanges"
            :disabled="!changes"
          >
            Save Changes
          </KButton>
          <KButton
            :title="'Cancel Changes'"
            @click="cancelChanges"
            :disabled="!changes"
          >
            Cancel Changes
          </KButton>
        </div>
      </template>
      <template #textEditor="{ props }">
        <TreeListTextEditor
          v-bind="props"
          :focusInputOnMount="true"
          @change="props.onChange"
        />
      </template>
      <template #numericEditor="{ props }">
        <TreeListNumericEditor
          v-bind="props"
          :focusInputOnMount="true"
          @change="props.onChange"
        />
      </template>
      <template #dateEditor="{ props }">
        <TreeListDateEditor
          v-bind="props"
          :focusInputOnMount="true"
          @change="props.onChange"
        />
      </template>
      <template #booleanEditor="{ props }">
        <TreeListBooleanEditor
          v-bind="props"
          :focusInputOnMount="true"
          @change="props.onChange"
        />
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

const dataItems = ref(employees.slice());
const expanded = ref([1, 2, 32]);
const editItem = ref(undefined);
const editItemField = ref(undefined);
const changes = ref(false);
const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';

const initColumns = [
    {
        field: 'name',
        title: 'Name',
        width: '280px',
        editor: 'text',
        editCell: 'textEditor',
        expandable: true,
    },
    {
        field: 'position',
        title: 'Position',
        width: '260px',
        editCell: 'textEditor',
    },
    {
        field: 'hireDate',
        title: 'Hire Date',
        format: '{0:d}',
        width: '170px',
        editCell: 'dateEditor',
    },
    {
        field: 'timeInPosition',
        title: 'Year(s) in Position',
        width: '170px',
        editCell: 'numericEditor',
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '160px',
        editCell: 'booleanEditor',
    },
];

const editItemId = computed(() => (editItem.value ? editItem.value.id : null));

const columns = computed(() =>
    initColumns.map((column) => ({
        ...column,
        editCell: editItemField.value === column.field ? column.editCell : undefined,
    }))
);

const processedData = computed(() =>
    mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
            [editField]: item.id === editItemId.value ? editItemField.value : undefined,
        })
    )
);

let preventExitTimeout;
let blurTimeout;

function handleRowMousedown() {
    preventExitTimeout = true;
    clearTimeout(preventExitTimeout);
    preventExitTimeout = setTimeout(() => {
        preventExitTimeout = undefined;
    });
}

function handleRowBlur() {
    clearTimeout(blurTimeout);

    if (!preventExitTimeout) {
        blurTimeout = setTimeout(() => {
            exitEdit();
        });
    }
}

function handleRowFocus() {
    clearTimeout(blurTimeout);
}

function handleCellClick(event) {
    const targetClasses = event.event.target.classList;

    if (
        targetClasses &&
    (targetClasses.contains('k-i-chevron-right') ||
      targetClasses.contains('k-i-chevron-down'))
    ) {
        return;
    }

    enterEdit(event.dataItem, event.field);
}

function enterEdit(dataItem, field) {
    editItem.value = { ...dataItem };
    editItemField.value = field;
}

function exitEdit() {
    editItem.value = undefined;
    editItemField.value = undefined;
}

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}

function saveChanges() {
    employees.splice(0, employees.length, ...dataItems.value);
    editItem.value = undefined;
    editItemField.value = undefined;
    changes.value = false;
}

function cancelChanges() {
    dataItems.value = [...employees];
    editItem.value = undefined;
    editItemField.value = undefined;
    changes.value = false;
}

function itemChange(event) {
    const field = event.field;

    changes.value = true;
    dataItems.value = mapTree(dataItems.value, subItemsField, (item) =>
        event.dataItem.id === item.id
            ? extendDataItem(item, subItemsField, {
                [field]: event.value,
            })
            : item
    );
}
</script>
