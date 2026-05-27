<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :key="0"
      :data-items="treeData"
      :value="value"
      @change="onChange"
      :placeholder="'Please select ...'"
      :text-field="textField"
      :data-item-key="dataItemKey"
      :select-field="selectField"
      :sub-items-field="subItemsField"
      :expand-field="expandField"
      @expandchange="onExpandChange"
      :header="'header'"
      :footer="'footer'"
    >
      <template #header>
        <span>SomeHeader</span>
      </template>
      <template #footer>
        <span>SomeFooter</span>
      </template>
    </DropDownTree>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { processTreeData, expandedState } from './tree-data-operations';
import { data } from './tree-data';

const dataItemKey = 'id';
const selectField = 'selected';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
    dataItemKey,
    selectField,
    expandField,
    subItemsField,
};

const value = ref(null);
const expanded = ref([data[0][dataItemKey]]);
const dataItems = ref(data);

const treeData = computed(() =>
    processTreeData(dataItems.value, { expanded: expanded.value, value: value.value }, fields)
);

function onChange(event) {
    value.value = event.value;
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
