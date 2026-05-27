<template>
  <div>
    <MultiSelectTree
      :style="{ width: '300px' }"
      :dataItems="treeData"
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
      :label="'Category'"
      :item="'item'"
      :tag="'tag'"
    >
      <template #item="{ props }">
        <span>
          <span :class="iconClassName(props.item)" />
          {{ props.item.text }}
        </span>
      </template>
      <template #tag="{ props }">
        <li class="k-chip">
          <span :class="iconClassName(props.tagData.data[0])" />
          <span class="custom-tag"></span> - {{ props.tagData.text }}
        </li>
      </template>
    </MultiSelectTree>
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
import { data } from "./tree-files-data";

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

const iconClassName = ({ text, items }) => {
    if (items !== undefined) {
        return "k-icon k-i-folder";
    } else if (/.pdf$/.test(text)) {
        return "k-icon k-i-file-pdf";
    } else if (/.html$/.test(text)) {
        return "k-icon k-i-html";
    } else if (/.jpg|.png$/.test(text)) {
        return "k-icon k-i-image";
    } else {
        return "";
    }
};

const onChange = (event) => {
    value.value = getMultiSelectTreeValue(dataItems.value, {
        ...fields,
        ...event,
        value: value.value,
    });
};

const onExpandChange = (event) => {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
};
</script>
