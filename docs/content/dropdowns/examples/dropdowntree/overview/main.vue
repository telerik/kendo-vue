<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :data-items="treeData"
      v-model="value"
      :placeholder="'Please select ...'"
      :text-field="textField"
      :data-item-key="dataItemKey"
      :select-field="selectField"
      :sub-items-field="subItemsField"
      :expand-field="expandField"
      @expandchange="onExpandChange"
      :label="'Category'"
    />
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

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
