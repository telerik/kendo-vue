<template>
  <div class="demo">
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :fill-mode="'flat'"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Flat:'"
      />
    </span>
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :fill-mode="'solid'"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Solid:'"
      />
    </span>
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :fill-mode="'Outline'"
        :value="value"
        @change="onChange"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Outline:'"
      />
    </span>
  </div>
  <div class="demo">
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :class="'custom-dropdowntree'"
        :dataItems="treeData"
        :fill-mode="null"
        :value="value"
        @change="onChange"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Full roundness:'"
      />
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { DropDownTree } from "@progress/kendo-vue-dropdowns";
import { processTreeData, expandedState } from "./tree-data-operations";
import { data } from "./tree-data";

const dataItemKey = "id";
const selectField = "selected";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";

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

<style>
.custom-dropdowntree .k-dropdowntree {
  width: 200px;
  background-color: #00aead;
  border: 2px solid #bfd843;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
