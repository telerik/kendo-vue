<template>
  <div>
    <MultiSelectTree
      :style="{ width: '300px' }"
      :key="0"
      :dataItems="treeData"
      :value="value"
      @change="onChange"
      placeholder="Please select ..."
      :textField="textField"
      :dataItemKey="dataItemKey"
      :checkField="checkField"
      :checkIndeterminateField="checkIndeterminateField"
      :subItemsField="subItemsField"
      :expandField="expandField"
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
    </MultiSelectTree>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MultiSelectTree, getMultiSelectTreeValue } from '@progress/kendo-vue-dropdowns';
import { processMultiSelectTreeData, expandedState } from './multiselecttree-data-operations';
import { data } from './tree-data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const dataItems = ref(data);
const value = ref([]);
const expanded = ref([data[0][dataItemKey]]);

const treeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        value: value.value,
        dataItemKey,
        checkField,
        checkIndeterminateField,
        expandField,
        subItemsField,
    })
);

function onChange(event) {
    value.value = getMultiSelectTreeValue(dataItems.value, {
        dataItemKey,
        checkField,
        checkIndeterminateField,
        expandField,
        subItemsField,
        ...event,
        value: value.value,
    });
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
