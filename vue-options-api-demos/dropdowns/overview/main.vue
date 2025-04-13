<template>
  <div class="example-wrapper" :style="{ minHeight: '400px' }">
    <div class="col-xs-12 col-sm-7 example-col">
      <p>AutoComplete</p>
      <AutoComplete
        :style="{ width: '230px' }"
        :data-items="sports"
        :placeholder="'Your favorite sport'"
      ></AutoComplete>
    </div>
    <div class="col-xs-12 col-sm-7 example-col">
      <p>ComboBox</p>
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sports"
        :default-value="'Basketball'"
      ></ComboBox>
    </div>
    <div class="col-xs-12 col-sm-7 example-col">
      <p>DropDownList</p>
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="sports"
        :default-value="'Basketball'"
      ></DropDownList>
    </div>
    <div class="col-xs-12 col-sm-7 example-col">
      <p>DropDownTree</p>
      <DropDownTree
        :style="{ width: '300px' }"
        :dataItems="dropDownTreeData"
        v-model="valueDDT"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :subItemsField="subItemsField"
        :selectField="selectField"
        :expandField="expandField"
        @expandchange="onExpandChange"
      />
    </div>
    <div class="col-xs-12 col-sm-7 example-col">
      <p>MultiSelect</p>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :default-value="['Basketball']"
      ></MultiSelect>
    </div>
    <div class="col-xs-12 col-sm-7 example-col">
      <p>MultiSelectTree</p>
      <MultiSelectTree
        :style="{ width: '230px' }"
        :dataItems="multiSelectTreeData"
        :value="valueMST"
        @change="onChange"
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
import {
  AutoComplete,
  ComboBox,
  DropDownList,
  DropDownTree,
  MultiSelect,
  MultiSelectTree,
  getMultiSelectTreeValue,
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
const textField = 'text';
const selectField = 'selected';

const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
  selectField,
};

export default {
  components: {
    AutoComplete,
    ComboBox,
    DropDownList,
    DropDownTree,
    MultiSelect,
    MultiSelectTree,
  },
  data: function () {
    return {
      sports: [
        'Baseball',
        'Basketball',
        'Cricket',
        'Field Hockey',
        'Football',
        'Table Tennis',
        'Tennis',
        'Volleyball',
      ],
      textField,
      dataItemKey,
      checkField,
      checkIndeterminateField,
      subItemsField,
      expandField,
      selectField,
      dataItems: data,
      valueMST: [],
      valueDDT: null,
      expanded: [data[0][dataItemKey]],
    };
  },
  computed: {
    multiSelectTreeData() {
      return processMultiSelectTreeData(this.dataItems, {
        expanded: this.expanded,
        value: this.valueMST,
        ...fields,
      });
    },
    dropDownTreeData() {
      return processTreeData(
        this.dataItems,
        { expanded: this.expanded, value: this.valueDDT },
        fields
      );
    },
  },
  methods: {
    onChange(event) {
      this.valueMST = getMultiSelectTreeValue(this.dataItems, {
        ...fields,
        ...event,
        value: this.valueMST,
      });
    },
    onExpandChange(event) {
      this.expanded = expandedState(event.item, dataItemKey, this.expanded);
    },
  },
};
</script>
