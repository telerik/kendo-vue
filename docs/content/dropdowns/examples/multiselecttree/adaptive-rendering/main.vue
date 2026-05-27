<template>
  <div>
    <MultiSelectTree
      :style="{ width: '300px' }"
      :data-items="treeData"
      :value="value"
      @change="onChange"
      :placeholder="'Please select ...'"
      :text-field="textField"
      :data-item-key="dataItemKey"
      :check-field="checkField"
      :check-indeterminate-field="checkIndeterminateField"
      :sub-items-field="subItemsField"
      :expand-field="expandField"
      @expandchange="onExpandChange"
      :label="'Category'"
      :filterable="true"
      @filterchange="onFilterChange"
      :adaptive="true"
      :adaptive-title="'Adaptive title sample'"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
    MultiSelectTree,
    getMultiSelectTreeValue,
} from "@progress/kendo-vue-dropdowns";
import {
    processMultiSelectTreeData,
    expandedState,
} from "./multiselecttree-data-operations";
import { data } from "./tree-data";

const dataItemKey = "id";
const checkField = "checkField";
const checkIndeterminateField = "checkIndeterminateField";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";

const fields = {
    dataItemKey,
    checkField,
    checkIndeterminateField,
    expandField,
    subItemsField,
};

const value = ref([]);
const expanded = ref([data[0][dataItemKey]]);
const filter = ref(null);
const dataItems = ref(data);

const treeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        filter: filter.value,
        value: value.value,
        ...fields,
    })
);

function onFilterChange(event) {
    filter.value = event.filter;
}

function onChange(event) {
    value.value = getMultiSelectTreeValue(dataItems.value, {
        ...fields,
        ...event,
        value: value.value,
    });
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
