<template>
    <div>
      <div class="example-config">MultiSelectTree Value: {{ value }}</div>
      <div :style="{ display: 'inline-block', 'padding-right': '20px' }">
        <p>Value property + change event</p>
        <MultiSelectTree
          :style="{ width: '300px' }"
          :dataItems="treeData"
          :value="value"
          :placeholder="'Please select ...'"
          :textField="textField"
          :dataItemKey="dataItemKey"
          :checkField="checkField"
          :checkIndeterminateField="checkIndeterminateField"
          :subItemsField="subItemsField"
          :expandField="expandField"
          @expandchange="onExpandChange"
          @change="onChange"
        />
      </div>
      <div :style="{ display: 'inline-block' }">
        <p>v-model</p>
        <MultiSelectTree
          :style="{ width: '300px' }"
          :dataItems="treeData"
          v-model="value"
          :placeholder="'Please select ...'"
          :textField="textField"
          :dataItemKey="dataItemKey"
          :checkField="checkField"
          :checkIndeterminateField="checkIndeterminateField"
          :subItemsField="subItemsField"
          :expandField="expandField"
          @expandchange="onExpandChange"
        />
      </div>
    </div>
  </template>
  <script>
  import { MultiSelectTree } from '@progress/kendo-vue-dropdowns';
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
        this.value = event.value;
      },
      onExpandChange(event) {
        this.expanded = expandedState(event.item, dataItemKey, this.expanded);
      },
    },
  };
  </script>
  