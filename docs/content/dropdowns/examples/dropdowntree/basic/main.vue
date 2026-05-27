<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :dataItems="treeData"
      v-model="value"
      :placeholder="'Please select ...'"
      :textField="textField"
      :dataItemKey="dataItemKey"
      :subItemsField="subItemsField"
      :selectField="selectField"
      :expandField="expandField"
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
const subItemsField = 'items';
const expandField = 'expanded';
const selectField = 'selected';
const textField = 'text';

const fields = { dataItemKey, expandField, selectField, subItemsField };

const value = ref(null);
const expanded = ref([data[0][dataItemKey]]);

const treeData = computed(() =>
    processTreeData(data, { expanded: expanded.value, value: value.value }, fields)
);

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
