<template>
  <div>
      <DropDownTree
        :style="{ width: '300px' }"
        :dataItems="treeData"
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
</template>
<script>
import {
  DropDownTree,
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
    DropDownTree
  },
  data: function () {
    return {
      textField,
      dataItemKey,
      selectField,
      subItemsField,
      expandField,
      dataItems: data,
      value: null,
      expanded: [data[0][dataItemKey]]
    };
  },
  computed: {
   treeData () {
      return processTreeData(this.dataItems, { expanded: this.expanded, value: this.value }, fields);
    }
  },
  methods: {
    onExpandChange (event) {
        this.expanded = (expandedState(event.item, dataItemKey, this.expanded))
    }
  }
};
</script>
