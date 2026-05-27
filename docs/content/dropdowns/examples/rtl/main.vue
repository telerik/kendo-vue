<template>
  <div class="row">
    <div class="m-3">
      <p>AutoComplete</p>
      <AutoComplete
        :style="{ width: '230px' }"
        :data-items="sports"
        placeholder="Your favorite sport"
        dir="rtl"
      />
    </div>
    <div class="m-3">
      <p>ComboBox</p>
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sports"
        default-value="Basketball"
        dir="rtl"
      />
    </div>
    <div class="m-3">
      <p>DropDownList</p>
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="sports"
        default-value="Basketball"
        dir="rtl"
      />
    </div>
    <div class="m-3">
      <p>DropDownTree</p>
      <DropDownTree
        :style="{ width: '230px' }"
        :dataItems="dropDownTreeData"
        v-model="valueDDT"
        placeholder="Please select ..."
        :textField="textField"
        :dataItemKey="dataItemKey"
        :subItemsField="subItemsField"
        :selectField="selectField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        dir="rtl"
      />
    </div>
    <div class="m-3">
      <p>MultiSelect</p>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :default-value="['Basketball']"
        dir="rtl"
      />
    </div>
    <div class="m-3">
      <p>MultiSelectTree</p>
      <MultiSelectTree
        :style="{ width: '230px' }"
        :dataItems="multiSelectTreeData"
        :value="valueMST"
        @change="onChange"
        placeholder="Please select ..."
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        dir="rtl"
      />
    </div>
  </div>
</template>

<script setup>
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
import { ref, computed } from 'vue';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';
const selectField = 'selected';

const sports = ref([
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
]);

const dataItems = ref(data);
const valueMST = ref([]);
const valueDDT = ref(null);
const expanded = ref([data[0][dataItemKey]]);

const multiSelectTreeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        value: valueMST.value,
        dataItemKey,
        checkField,
        checkIndeterminateField,
        expandField,
        subItemsField,
        selectField,
    })
);

const dropDownTreeData = computed(() =>
    processTreeData(
        dataItems.value,
        { expanded: expanded.value, value: valueDDT.value },
        { dataItemKey, checkField, checkIndeterminateField, expandField, subItemsField, selectField }
    )
);

function onChange(event) {
    valueMST.value = getMultiSelectTreeValue(dataItems.value, {
        dataItemKey,
        checkField,
        checkIndeterminateField,
        expandField,
        subItemsField,
        selectField,
        ...event,
        value: valueMST.value,
    });
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
