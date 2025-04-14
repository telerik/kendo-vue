<template>
  <div class="demo">
    <span class="wrapper">
      <MultiSelectTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :size="'small'"
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
        :label="'Small'"
      />
    </span>
    <span class="wrapper">
      <MultiSelectTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :size="'medium'"
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
        :label="'Medium:'"
      />
    </span>
    <span class="wrapper">
      <MultiSelectTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :size="'large'"
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
        :label="'Large:'"
      />
    </span>
  </div>
</template>
<script>
import {
  MultiSelectTree,
  getMultiSelectTreeValue,
} from '@progress/kendo-vue-dropdowns';
import {
  processMultiSelectTreeData,
  expandedState,
} from './multiselecttree-data-operations';
import { data } from './tree-data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};

export default {
  components: {
    MultiSelectTree,
  },
  data() {
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
<style>
.custom-multiselect {
  height: 40px;
  width: 200px;
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
