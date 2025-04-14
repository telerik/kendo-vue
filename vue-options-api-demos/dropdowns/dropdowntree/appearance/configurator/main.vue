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
<script>
import DropDownStyleConfigurator from "./DropDownStyleConfigurator.vue";
import {
  DropDownTree
} from "@progress/kendo-vue-dropdowns";
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

export default {
  components: {
    DropDownStyleConfigurator,
    DropDownTree,
  },
  data() {
    return {
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
      textField,
      dataItemKey,
      selectField,
      subItemsField,
      expandField,
      dataItems: data,
      value: null,
      expanded: [data[0][dataItemKey]],
    };
  },
  computed: {
    treeData() {
      return processTreeData(this.dataItems, { expanded: this.expanded, value: this.value }, fields);
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
    onChange (event) {
      this.value = event.value;
    },
    onExpandChange(event) {
      this.expanded = expandedState(event.item, dataItemKey, this.expanded);
    },
  },
};
</script>
