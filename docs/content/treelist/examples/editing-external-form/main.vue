<template>
  <div class="example-wrapper">
    <TreeList
      :data-items="employees"
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :edit-field="editField"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
    >
      <template #myTemplate="{ props }">
        <CommandCell
          :data-item="props.dataItem"
          @edit="edit"
          @remove="remove"
        />
      </template>
    </TreeList>
    <DialogContainer
      v-if="itemInEdit"
      :data-item="itemInEdit"
      @change="onItemChange"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    TreeList,
    mapTree,
    extendDataItem,
    removeItems,
} from '@progress/kendo-vue-treelist';
import sampleEmployees from './data';
import DialogContainer from './DialogContainer.vue';
import CommandCell from './CommandCell.vue';

const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';
const expanded = ref([1, 2, 32]);
const dataItems = ref([...sampleEmployees]);
const itemInEdit = ref(undefined);

const columns = [
    { field: 'name', title: 'Employee', expandable: true },
    { field: 'position', title: 'Position' },
    { field: 'fullTime', title: 'Full Time' },
    { title: 'Edit', cell: 'myTemplate', width: '210px' },
];

const employees = computed(() =>
    mapTree(dataItems.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    )
);

function edit(dataItem) {
    itemInEdit.value = extendDataItem(dataItem, subItemsField);
}

function remove(dataItem) {
    dataItems.value = removeItems(dataItems.value, subItemsField, (i) => i.id === dataItem.id);
}

function save(dataItem) {
    dataItems.value = mapTree(dataItems.value, subItemsField, (item) =>
        dataItem.id === item.id ? dataItem : item
    );
    itemInEdit.value = undefined;
}

function cancel() {
    itemInEdit.value = undefined;
}

function onItemChange(updatedItem) {
    itemInEdit.value = updatedItem;
}

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}
</script>
