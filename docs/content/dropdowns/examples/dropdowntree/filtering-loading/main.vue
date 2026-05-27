<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :dataItems="treeData"
      :value="value"
      @change="onChange"
      :placeholder="'Please select ...'"
      :textField="textField"
      :dataItemKey="dataItemKey"
      :selectField="selectField"
      :subItemsField="subItemsField"
      :expandField="expandField"
      @expandchange="onExpandChange"
      :loading="loading"
      :label="'Category'"
      :filterable="true"
      @filterchange="onFilterChange"
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

const fields = { dataItemKey, selectField, expandField, subItemsField };

const loading = ref(false);
const value = ref(null);
const expanded = ref([data[0][dataItemKey]]);
const filter = ref(null);

const treeData = computed(() =>
    processTreeData(data, { expanded: expanded.value, value: value.value, filter: filter.value }, fields)
);

function onFilterChange(event) {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        filter.value = event.filter;
    }, 200);
}

function onChange(event) {
    value.value = event.value;
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
