<template>
  <div class="demo">
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :fill-mode="'flat'"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Flat:'"
      />
    </span>
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :fill-mode="'solid'"
        v-model="value"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Solid:'"
      />
    </span>
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :dataItems="treeData"
        :fill-mode="'Outline'"
        :value="value"
        @change="onChange"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Outline:'"
      />
    </span>
  </div>
  <div class="demo">
    <span class="wrapper">
      <DropDownTree
        :style="{ width: '170px' }"
        :class="'custom-dropdowntree'"
        :dataItems="treeData"
        :fill-mode="null"
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
        :label="'Full roundness:'"
      />
    </span>
  </div>
</template>
<script>
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { processTreeData, expandedState } from './tree-data-operations';
import { data } from './tree-data';

const dataItemKey = 'id';
const selectField = 'selected';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
  dataItemKey,
  selectField,
  expandField,
  subItemsField,
};

export default {
  components: {
    DropDownTree,
  },
  data() {
    return {
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
      return processTreeData(
        this.dataItems,
        { expanded: this.expanded, value: this.value },
        fields
      );
    },
  },
  methods: {
    onChange(event) {
      this.value = event.value;
    },
    onExpandChange(event) {
      this.expanded = expandedState(event.item, dataItemKey, this.expanded);
    },
  },
};
</script>
<style>
.custom-dropdowntree .k-dropdowntree {
  width: 200px;
  background-color: #00aead;
  border: 2px solid #bfd843;
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
