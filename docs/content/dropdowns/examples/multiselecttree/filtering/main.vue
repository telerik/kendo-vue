<template>
  <div>
    <MultiSelectTree
      :style="{ width: '300px' }"
      :data-items="treeData"
      :value="value"
      @change="onChange"
      :placeholder="'Please select ...'"
      :text-field="fields.textField"
      :data-item-key="fields.dataItemKey"
      :check-field="fields.checkField"
      :check-indeterminate-field="fields.checkIndeterminateField"
      :sub-items-field="fields.subItemsField"
      :expand-field="fields.expandField"
      @expandchange="onExpandChange"
      :label="'Category'"
      :filterable="true"
      @filterchange="onFilterChange"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MultiSelectTree } from '@progress/kendo-vue-dropdowns';
import {
    processMultiSelectTreeData,
    expandedState,
} from './multiselecttree-data-operations';
import { data } from './tree-data';

const fields = {
    dataItemKey: 'id',
    checkField: 'checkField',
    checkIndeterminateField: 'checkIndeterminateField',
    expandField: 'expanded',
    subItemsField: 'items',
    textField: 'text',
};

const dataItems = ref(data);
const value = ref([]);
const expanded = ref([data[0][fields.dataItemKey]]);
const filter = ref(null);

const treeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        filter: filter.value,
        value: value.value,
        ...fields,
    })
);

function onChange(event) {
    value.value = event.value;
}

function onFilterChange(event) {
    filter.value = event.filter;
}

function onExpandChange(event) {
    expanded.value = expandedState(
        event.item,
        fields.dataItemKey,
        expanded.value
    );
}
</script>
