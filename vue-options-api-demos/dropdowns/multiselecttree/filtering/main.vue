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
        :filterable="true"
        @filterchange="onFilterChange"
      />
    </div>
</template>
<script>
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
    MultiSelectTree
  },
  data: function () {
    return {
      textField,
      dataItemKey,
      checkField,
      checkIndeterminateField,
      subItemsField,
      expandField,
      dataItems: data,
      value: [],
      expanded: [data[0][dataItemKey]],
      filter: null
    };
  },
  computed: {
    treeData () {
      return  processMultiSelectTreeData(this.dataItems, { 
        expanded: this.expanded, 
        filter: this.filter, 
        value: this.value, ...fields })
    }
  },
  methods: {
    onFilterChange(event) {
      this.filter = event.filter;
    },
    onChange (event) {
      this.value = (getMultiSelectTreeValue(this.dataItems, { ...fields, ...event, value: this.value }));
    },
    onExpandChange (event) {
        this.expanded = (expandedState(event.item, dataItemKey, this.expanded))
    }
  }
};
</script>
