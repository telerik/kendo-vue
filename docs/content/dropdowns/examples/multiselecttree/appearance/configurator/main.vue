<template>
  <div>
    <DropDownStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <div>
      <MultiSelectTree
        :style="{ width: '300px' }"
        :data-items="treeData"
        :size="size"
        :fill-mode="fillMode"
        :rounded="rounded"
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
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DropDownStyleConfigurator from "./DropDownStyleConfigurator.vue";
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

const size = ref("medium");
const rounded = ref("medium");
const fillMode = ref("solid");
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

function setRounded(event) {
    rounded.value = event.value;
}

function setSize(event) {
    size.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
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
