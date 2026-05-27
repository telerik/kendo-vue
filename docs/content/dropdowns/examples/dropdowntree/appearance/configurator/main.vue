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
      <DropDownTree
        :style="{ width: '300px' }"
        :dataItems="treeData"
        :size="size"
        :fill-mode="fillMode"
        :rounded="rounded"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Category'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DropDownStyleConfigurator from "./DropDownStyleConfigurator.vue";
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

const size = ref("medium");
const rounded = ref("medium");
const fillMode = ref("solid");
const value = ref(null);
const expanded = ref([data[0][dataItemKey]]);
const dataItems = ref(data);

const treeData = computed(() =>
    processTreeData(dataItems.value, { expanded: expanded.value, value: value.value }, fields)
);

function setSize(event) {
    size.value = event.value;
}

function setRounded(event) {
    rounded.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
