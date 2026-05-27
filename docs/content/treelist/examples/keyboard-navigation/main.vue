<template>
  <TreeList
    :style="{ maxHeight: '510px', overflow: 'auto' }"
    :navigatable="true"
    :expand-field="expandField"
    :sub-items-field="subItemsField"
    :data-items="processedData"
    :columns="columns"
    :filter="filter"
    :filterable="true"
    :sort="sort"
    :sortable="true"
    @datastatechange="handleDataStateChange"
    @expandchange="onExpandChange"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import {
    TreeList,
    filterBy,
    orderBy,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const filter = ref([]);
const sort = ref([{ field: 'name', dir: 'asc' }]);
const columns = ref([
    { field: 'name', title: 'Name', width: '250px', filter: 'text', expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}', filter: 'date' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px', filter: 'numeric' },
    { field: 'fullTime', title: 'Full Time', width: '100px', filter: 'boolean' },
]);

const processedData = computed(() => {
    let data = employees;
    let filteredData = filterBy(data, filter.value, subItemsField);
    let sortedData = orderBy(filteredData, sort.value, subItemsField);
    return addExpandField(sortedData);
});

function onExpandChange(e) {
    expanded.value = e.value
        ? expanded.value.filter((id) => id !== e.dataItem.id)
        : [...expanded.value, e.dataItem.id];
}

function handleDataStateChange(event) {
    sort.value = event.data.sort;
    filter.value = event.data.filter;
}

function addExpandField(dataTree) {
    return mapTree(dataTree, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    );
}
</script>
