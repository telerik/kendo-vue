<template>
  <TreeList
    :style="{ maxHeight: '610px', overflow: 'auto' }"
    :expand-field="expandField"
    :sub-items-field="subItemsField"
    :data-items="processedData"
    :columns="columns"
    @expandchange="onExpandChange"
    @pagechange="onPageChange"
    :skip="skip"
    :take="take"
    :pageable="true"
    :toolbar="'toolbar'"
  >
    <template #toolbar>
      <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
    </template>
  </TreeList>
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import {
    TreeList,
    treeToFlat,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const skip = ref(0);
const take = ref(8);
const columns = ref([
    { field: 'name', title: 'Name', width: '250px', expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px' },
    { field: 'fullTime', title: 'Full Time', width: '100px' },
]);

const processedData = computed(() => {
    return addExpandField(employees);
});

function onPageChange(event) {
    skip.value = event.skip;
    take.value = event.take;
}

function exportExcel() {
    saveExcel({
        fileName: 'myFile',
        data: treeToFlat(processedData.value, expandField, subItemsField).slice(
            skip.value,
            skip.value + take.value
        ),
        columns: columns.value,
        hierarchy: true,
    });
}

function onExpandChange(e) {
    expanded.value = e.value
        ? expanded.value.filter((id) => id !== e.dataItem.id)
        : [...expanded.value, e.dataItem.id];
}

function addExpandField(dataTree) {
    return mapTree(dataTree, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    );
}
</script>
