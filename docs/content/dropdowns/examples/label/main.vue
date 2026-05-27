<template>
  <div class="row">
    <div class="m-3">
      <p>AutoComplete</p>
      <AutoComplete
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
      />
    </div>
    <div class="m-3">
      <p>ComboBox</p>
      <ComboBox
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
      />
    </div>
    <div class="m-3">
      <p>DropDownList</p>
      <DropDownList
        :style="{ width: '230px' }"
        :label="'Product'"
        :data-items="dataProducts"
        :text-field="'productName'"
        :value-field="'productId'"
      />
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
      />
    </div>
    <div class="m-3">
      <p>DropDownTree</p>
      <DropDownTree
        :style="{ width: '230px' }"
        :data-items="treeData"
        v-model="ddtValue"
        :text-field="textField"
        :data-item-key="dataItemKey"
        :sub-items-field="subItemsField"
        :select-field="selectField"
        :expand-field="expandField"
        @expandchange="onExpandChange"
        :label="'Category'"
      />
    </div>
    <div class="m-3">
      <p>MultiSelectTree</p>
      <MultiSelectTree
        :style="{ width: '230px' }"
        :data-items="multiTreeData"
        v-model="mstValue"
        :text-field="textField"
        :data-item-key="dataItemKey"
        :check-field="checkField"
        :check-indeterminate-field="checkIndeterminateField"
        :sub-items-field="subItemsField"
        :expand-field="expandField"
        @expandchange="onExpandChange"
        :label="'Category'"
      />
    </div>
  </div>
</template>

<script setup>
import {
    AutoComplete,
    ComboBox,
    DropDownList,
    MultiSelect,
    DropDownTree,
    MultiSelectTree,
} from '@progress/kendo-vue-dropdowns';
import { ref, computed } from 'vue';
import { processMultiSelectTreeData, expandedState } from './multiselecttree-data-operations';
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

const dataProducts = [
    { productName: 'Chai', productId: 1, categoryId: 1 },
    { productName: 'Chang', productId: 2, categoryId: 1 },
    { productName: 'Aniseed Syrup', productId: 3, categoryId: 2 },
    { productName: 'Genen Shouyu', productId: 4, categoryId: 2 },
    { productName: 'Ikura', productId: 5, categoryId: 3 },
];

const ddtValue = ref(null);
const mstValue = ref([]);
const expanded = ref([data[0][dataItemKey]]);
const dataItems = ref(data);

const multiTreeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        value: mstValue.value,
        ...fields,
    })
);

const treeData = computed(() =>
    processTreeData(
        dataItems.value,
        { expanded: expanded.value, value: ddtValue.value },
        fields
    )
);

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
