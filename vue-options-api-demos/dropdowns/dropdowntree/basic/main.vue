<template>
  <div>
      <DropDownTree
        :style="{ width: '300px' }"
        :dataItems="treeData"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :subItemsField="subItemsField"
        :selectField="selectField"
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
const subItemsField = "items";
const expandField = "expanded";
const selectField = "selected";
const textField = "text";

const fields = {
  dataItemKey,
  expandField,
  selectField,
  subItemsField,
};

export default {
  components: {
    DropDownTree
  },
  data: function () {
    return {
      fields,
      textField,
      dataItemKey,
      subItemsField,
      expandField,
      selectField,
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
    onChange (event) {
      this.value = event.value;
    },
    onExpandChange (event) {
        this.expanded = (expandedState(event.item, dataItemKey, this.expanded))
    }
  }
};
</script>
