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
      <div>
        <span>
          Choose a file name:
          <DropDownList
            :data-items="fileNames"
            :value="fileName"
            :style="{ marginRight: '20px' }"
            @change="onFileNameChange"
          />
          <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
        </span>
      </div>
    </template>
  </TreeList>
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import {
    TreeList,
    treeToFlat,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const fileName = ref('MyFile');
const fileNames = ['MyFile', 'EmployeeData', 'TestData'];
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

function onFileNameChange(e) {
    fileName.value = e.value;
}

function exportExcel() {
    saveExcel({
        fileName: fileName.value,
        data: treeToFlat(processedData.value, expandField, subItemsField),
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
