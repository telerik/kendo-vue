<template>
  <div>
    <TreeListPDFExport ref="treeListPdfExport">
      <TreeList
        :style="{ maxHeight: '510px', overflow: 'auto' }"
        :expand-field="expandField"
        :sub-items-field="subItemsField"
        @expandchange="onExpandChange"
        :filter="filter"
        :filterable="filterable"
        :data-items="processedData"
        @filterchange="handleFilterChange"
        :columns="columns"
        :toolbar="'toolbar'"
      >
        <template #toolbar>
          <div>
            <KButton @click="exportPDFWithComp">Export Data To PDF</KButton>
          </div>
        </template>
      </TreeList>
    </TreeListPDFExport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { TreeListPDFExport } from '@progress/kendo-vue-pdf';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import employees from './data';
import {
    TreeList,
    filterBy,
    extendDataItem,
    mapTree,
} from '@progress/kendo-vue-treelist';

const treeListPdfExport = ref(null);
const dataItems = ref([...employees]);
const filter = ref([]);
const filterable = ref(true);
const expanded = ref([1, 2, 32]);
const subItemsField = 'employees';
const expandField = 'expanded';
const columns = ref([
    { field: 'name', title: 'Name', width: '320px', expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '280px', format: '{0:d}', filter: 'date' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '280px', filter: 'numeric' },
    { field: 'fullTime', title: 'Full Time', width: '190px', filter: 'boolean' },
]);

const processedData = computed(() => {
    let filteredData = filterBy(dataItems.value, filter.value, subItemsField);
    return addExpandField(filteredData);
});

function exportPDFWithComp() {
    treeListPdfExport.value.save(processedData.value);
}

function onExpandChange(e) {
    expanded.value = e.value
        ? expanded.value.filter((id) => id !== e.dataItem.id)
        : [...expanded.value, e.dataItem.id];
}

function handleFilterChange(event) {
    filter.value = event.filter;
}

function addExpandField(dataTree) {
    return mapTree(dataTree, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    );
}
</script>
