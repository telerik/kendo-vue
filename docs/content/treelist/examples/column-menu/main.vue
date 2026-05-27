<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :data-items="tree"
      :expand-field="expandField"
      :column-menu-filter="filter"
      @columnmenufilterchange="handleFilterChange"
      @sortchange="onSortChange"
      :sort="sort"
      :filter="filter"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
      :column-menu="true"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import {
    TreeList,
    filterBy,
    orderBy,
    extendDataItem,
    mapTree,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const filter = ref([]);
const sort = ref([]);
const dataItems = ref([...employees]);

const columns = [
    { field: 'name', title: 'Name', width: '320px', expandable: true },
    {
        field: 'hireDate',
        title: 'Hire Date',
        width: '280px',
        format: '{0:d}',
        filter: 'date',
        columnMenu: true,
    },
    {
        field: 'timeInPosition',
        title: 'Year(s) in Position',
        width: '280px',
        filter: 'numeric',
        columnMenu: true,
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '190px',
        filter: 'boolean',
        columnMenu: true,
    },
];

const treeListStyles = {
    maxHeight: '510px',
    overflow: 'auto',
};

const processedData = computed(() =>
    orderBy(
        filterBy(dataItems.value, filter.value, subItemsField),
        sort.value,
        subItemsField
    )
);

const tree = computed(() =>
    mapTree(processedData.value, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    )
);

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}

function onSortChange(event) {
    sort.value = event.sort;
}

function handleFilterChange(event) {
    filter.value = event.filter;
}
</script>
