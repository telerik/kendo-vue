<template>
  <div class="row">
    <div class="m-3">
      <p>AutoComplete</p>
      <AutoComplete
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
      >
      </AutoComplete>
    </div>
    <div class="m-3">
      <p>ComboBox</p>
      <ComboBox
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
      >
      </ComboBox>
    </div>
    <div class="m-3">
      <p>DropDownList</p>
      <DropDownList
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
        :value-field="'productId'"
      >
      </DropDownList>
    </div>
  </div>
  <div class="row">
    <div class="m-3">
      <p>MultiSelect</p>
      <MultiSelect
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
        :value-field="'productId'"
      >
      </MultiSelect>
    </div>
    <div class="m-3">
      <p>DropDownTree</p>
      <DropDownTree
        :style="{ width: '230px' }"
        :dataItems="treeData"
        v-model="ddtValue"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :subItemsField="subItemsField"
        :selectField="selectField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :label="'Category'"
      />
    </div>
    <div class="m-3">
      <p>MultiSelectTree</p>
      <MultiSelectTree
        :style="{ width: '230px' }"
        :dataItems="multiTreeData"
        v-model="mstValue"
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
import {
  AutoComplete,
  ComboBox,
  DropDownList,
  MultiSelect,
  DropDownTree,
  MultiSelectTree,
} from '@progress/kendo-vue-dropdowns';

import {
  processMultiSelectTreeData,
  expandedState,
} from './multiselecttree-data-operations';
import { processTreeData } from './tree-data-operations';
import { data } from './tree-data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const selectField = 'selected';
const textField = 'text';

const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  selectField,
  subItemsField,
};

export default {
  components: {
    AutoComplete,
    ComboBox,
    DropDownList,
    MultiSelect,
    DropDownTree,
    MultiSelectTree,
  },
  data: function () {
    return {
      dataProducts: [
        { productName: 'Chai', productId: 1, categoryId: 1 },
        { productName: 'Chang', productId: 2, categoryId: 1 },
        { productName: 'Aniseed Syrup', productId: 3, categoryId: 2 },
        { productName: 'Genen Shouyu', productId: 4, categoryId: 2 },
        { productName: 'Ikura', productId: 5, categoryId: 3 },
      ],
      textField,
      dataItemKey,
      checkField,
      checkIndeterminateField,
      subItemsField,
      expandField,
      selectField,
      dataItems: data,
      ddtValue: null,
      mstValue: [],
      expanded: [data[0][dataItemKey]],
    };
  },
  computed: {
    multiTreeData() {
      return processMultiSelectTreeData(this.dataItems, {
        expanded: this.expanded,
        value: this.mstValue,
        ...fields,
      });
    },
    treeData() {
      return processTreeData(
        this.dataItems,
        { expanded: this.expanded, value: this.ddtValue },
        fields
      );
    },
  },
  methods: {
    onExpandChange(event) {
      this.expanded = expandedState(event.item, dataItemKey, this.expanded);
    },
  },
};
</script>
  