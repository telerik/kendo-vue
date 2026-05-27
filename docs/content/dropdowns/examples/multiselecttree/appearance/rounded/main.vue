<template>
    <div class="demo">
        <span class="wrapper">
            <MultiSelectTree
                :style="{ width: '270px' }"
                :dataItems="treeData"
                :rounded="'small'"
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
                :label="'Small roundness:'"
            />
        </span>
        <span class="wrapper">
            <MultiSelectTree
                :style="{ width: '270px' }"
                :dataItems="treeData"
                :rounded="'medium'"
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
                :label="'Medium roundness:'"
            />
        </span>
        <span class="wrapper">
            <MultiSelectTree
                :style="{ width: '270px' }"
                :dataItems="treeData"
                :rounded="'large'"
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
                :label="'Large roundness:'"
            />
        </span>
    </div>
    <div class="demo">
        <span class="wrapper">
            <MultiSelectTree
                :style="{ width: '270px' }"
                :dataItems="treeData"
                :rounded="'full'"
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
        <span class="wrapper">
            <MultiSelectTree
                :class="'custom-multiselecttree'"
                :dataItems="treeData"
                :rounded="'none'"
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
                :label="'Custom roundness:'"
            />
        </span>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MultiSelectTree, getMultiSelectTreeValue } from '@progress/kendo-vue-dropdowns';
import { processMultiSelectTreeData, expandedState } from './multiselecttree-data-operations';
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

const dataItems = ref(data);
const value = ref([]);
const expanded = ref([data[0][dataItemKey]]);

const treeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        value: value.value,
        ...fields,
    }),
);

function onChange(event) {
    value.value = getMultiSelectTreeValue(dataItems.value, {
        ...fields,
        ...event,
        value: value.value,
    });
}

function onExpandChange(event) {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
}
</script>

<style>
.custom-multiselecttree .k-multiselecttree {
    width: 270px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
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
