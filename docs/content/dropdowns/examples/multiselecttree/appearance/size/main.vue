<template>
    <div class="demo">
        <span class="wrapper">
            <MultiSelectTree
                :style="{ width: '270px' }"
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
                :style="{ width: '270px' }"
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
                :style="{ width: '270px' }"
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

const value = ref([]);
const expanded = ref([data[0][dataItemKey]]);
const dataItems = ref(data);

const treeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: expanded.value,
        value: value.value,
        ...fields,
    }),
);

const onChange = (event) => {
    value.value = getMultiSelectTreeValue(dataItems.value, {
        ...fields,
        ...event,
        value: value.value,
    });
};

const onExpandChange = (event) => {
    expanded.value = expandedState(event.item, dataItemKey, expanded.value);
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
