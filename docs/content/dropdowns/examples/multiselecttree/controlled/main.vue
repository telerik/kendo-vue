<template>
  <div>
    <div class="example-config">MultiSelectTree Value: {{ value }}</div>
    <div :style="{ display: 'inline-block', 'padding-right': '20px' }">
      <p>Value property + change event</p>
      <MultiSelectTree
        :style="{ width: '300px' }"
        :dataItems="treeData"
        :value="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        @change="onChange"
      />
    </div>
    <div :style="{ display: 'inline-block' }">
      <p>v-model</p>
      <MultiSelectTree
        :style="{ width: '300px' }"
        :dataItems="treeData"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { MultiSelectTree } from "@progress/kendo-vue-dropdowns";
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
const dataItems = ref(data);

const treeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        value: value.value,
        ...fields,
    })
);

const onChange = (event) => {
    value.value = event.value;
};

const onExpandChange = (event) => {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
};
</script>
