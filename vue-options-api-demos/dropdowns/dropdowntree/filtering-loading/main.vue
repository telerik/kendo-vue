<template>
  <div>
      <DropDownTree
        :style="{ width: '300px' }"
        :dataItems="treeData"
        :value="value"
        @change="onChange"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :loading="loading"
        :label="'Category'"
        :filterable="true"
        @filterchange="onFilterChange"
      />
    </div>
</template>
<script>
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
    DropDownTree
  },
  data: function () {
    return {
      loading: false,
      textField,
      dataItemKey,
      selectField,
      subItemsField,
      expandField,
      dataItems: data,
      value: null,
      expanded: [data[0][dataItemKey]],
      filter: null
    };
  },
  computed: {
    treeData () {
      return processTreeData(this.dataItems, { 
        expanded: this.expanded, 
        value: this.value,
        filter: this.filter
     }, fields);
    }
  },
  methods: {
    onFilterChange(event) {
      this.loading = true;
      setTimeout(() => {
          this.loading = false;
          this.filter = event.filter;
      }, 200);
    },
    onChange (event) {
      this.value = event.value;
    },
    onExpandChange (event) {
        this.expanded = (expandedState(event.item, dataItemKey, this.expanded))
    }
  }
};
</script>
