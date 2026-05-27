<template>
  <TreeList
    :style="{ maxHeight: '510px', overflow: 'auto' }"
    :expand-field="expandField"
    :sub-items-field="subItemsField"
    :data-items="processedData"
    :columns="columns"
    @expandchange="onExpandChange"
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
import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
import { saveAs } from '@progress/kendo-file-saver';
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
const columns = ref([
    { field: 'name', title: 'Name', width: '250px', expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px' },
    { field: 'fullTime', title: 'Full Time', width: '100px' },
]);

const processedData = computed(() => {
    return addExpandField(employees);
});

function exportExcel() {
    customSaveExcel({
        data: treeToFlat(processedData.value, expandField, subItemsField),
        fileName: 'myFile',
        columns: columns.value,
        hierarchy: true,
    });
}

function customSaveExcel(exportOptions) {
    const saveFn = (dataURL) => {
        saveAs(dataURL, exportOptions.fileName);
    };

    const options = workbookOptions(exportOptions);
    const rows = options.sheets[0].rows;

    let altIdx = 0;
    rows.forEach((row) => {
        if (row.type === 'data') {
            if (altIdx % 2 !== 0) {
                row.cells.forEach((cell) => {
                    cell.background = '#aabbcc';
                });
            }
            altIdx++;
        }
    });
    toDataURL(options).then(saveFn);
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
