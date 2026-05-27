<template>
  <LocalizationProvider :language="'es-ES'">
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :filter="filter"
      :data-items="processedData"
      @filterchange="handleFilterChange"
      :columns="columns"
    />
  </LocalizationProvider>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    TreeList,
    filterBy,
    extendDataItem,
    mapTree,
} from '@progress/kendo-vue-treelist';
import { LocalizationProvider, loadMessages } from '@progress/kendo-vue-intl';
import esMessages from './es.json';
import employees from './data';

loadMessages(esMessages, 'es-ES');

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const filter = ref([]);
const columns = ref([
    { field: 'name', title: 'Nombre', width: '320px', expandable: true },
    { field: 'hireDate', title: 'Fecha de contratación', width: '280px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Año(s) en posición', width: '280px' },
    { field: 'fullTime', title: 'Tiempo completo', width: '190px' },
]);

const dataItems = ref([...employees]);

const processedData = computed(() => {
    let filteredData = filterBy(dataItems.value, filter.value, subItemsField);
    return addExpandField(filteredData);
});

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
