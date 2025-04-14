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
        :dataItems="treeData"
        :size="size"
        :fill-mode="fillMode"
        :rounded="rounded"
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
      />
    </div>
  </div>
</template>
<script>
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

export default {
  components: {
    DropDownStyleConfigurator,
    MultiSelectTree,
  },
  data() {
    return {
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
      textField,
      dataItemKey,
      checkField,
      checkIndeterminateField,
      subItemsField,
      expandField,
      dataItems: data,
      value: [],
      expanded: [data[0][dataItemKey]],
    };
  },
  computed: {
    treeData() {
      return processMultiSelectTreeData(this.dataItems, {
        expanded: this.expanded,
        value: this.value,
        ...fields,
      });
    },
  },
  methods: {
    setRounded(event) {
      this.rounded = event.value;
    },
    setSize(event) {
      this.size = event.value;
    },
    setFillMode(event) {
      this.fillMode = event.value;
    },
    onChange(event) {
      this.value = getMultiSelectTreeValue(this.dataItems, {
        ...fields,
        ...event,
        value: this.value,
      });
    },
    onExpandChange(event) {
      this.expanded = expandedState(event.item, dataItemKey, this.expanded);
    },
  },
};
</script>
