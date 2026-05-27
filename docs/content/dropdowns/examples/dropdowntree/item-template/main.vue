<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :data-items="treeData"
      :value="value"
      @change="onChange"
      :text-field="textField"
      :data-item-key="dataItemKey"
      :select-field="selectField"
      :sub-items-field="subItemsField"
      :expand-field="expandField"
      @expandchange="onExpandChange"
      :label="'Category'"
      :item="'item'"
      :value-render="'valueRender'"
    >
      <template #item="{ props }">
        <span>
          <span :class="iconClassName(props.item)" />
          {{ props.item.text }}
        </span>
      </template>
      <template #valueRender="{ props }">
        <span v-if="props.value">
          <span :class="iconClassName(props.value)" />
          <span class="custom-tag"></span> - {{ props.value.text }}
        </span>
      </template>
    </DropDownTree>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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

const value = ref(null);
const expanded = ref([data[0][dataItemKey]]);
const dataItems = ref(data);

const treeData = computed(() =>
    processTreeData(dataItems.value, { expanded: expanded.value, value: value.value }, fields)
);

function iconClassName({ text, items }) {
    if (items !== undefined) {
        return 'k-icon k-i-folder';
    } else if (/\.pdf$/.test(text)) {
        return 'k-icon k-i-file-pdf';
    } else if (/\.html$/.test(text)) {
        return 'k-icon k-i-html';
    } else if (/\.(jpg|png)$/.test(text)) {
        return 'k-icon k-i-image';
    } else {
        return '';
    }
}

function onChange(event) {
    value.value = event.value;
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>
