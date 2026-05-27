<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :filter="filter"
      :filterable="true"
      :data-items="processedData"
      @filterchange="handleFilterChange"
      :columns="columns"
    >
      <template #MyDropDownFilter="{ props }">
        <DropDownFilter
          :data-item="props.dataItem"
          :data="dropDownData"
          :default-item="'Select Position'"
          @change="
            (ev) => {
              props.onChange({
                operator: 'eq',
                field: props.field,
                value: ev.value,
                syntheticEvent: ev.syntheticEvent,
              });
            }
          "
        />
      </template>
    </TreeList>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import employees from './data';
import DropDownFilter from './DropDownListFilter.vue';
import {
    TreeList,
    filterBy,
    extendDataItem,
    mapTree,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const filter = ref([]);
const dropDownData = ref([]);
const dataItems = ref([...employees]);
const columns = ref([
    { field: 'name', title: 'Name', width: '400px', expandable: true },
    { field: 'position', title: 'Position', width: '300px', filterCell: 'MyDropDownFilter' },
    { field: 'hireDate', title: 'Hire Date', width: '300px', format: '{0:d}' },
    { field: 'fullTime', title: 'Full Time', width: '300px' },
]);

onMounted(() => {
    const positions = new Set();
    mapTree(dataItems.value, subItemsField, (item) => {
        positions.add(item.position);
    });
    dropDownData.value = Array.from(positions);
});

const processedData = computed(() => {
    let data = dataItems.value;
    const filteredData = filterBy(data, filter.value, subItemsField);
    return mapTree(filteredData, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            [expandField]: expanded.value.includes(item.id),
        })
    );
});

function onExpandChange(e) {
    expanded.value = e.value
        ? expanded.value.filter((id) => id !== e.dataItem.id)
        : [...expanded.value, e.dataItem.id];
}

function handleFilterChange(event) {
    filter.value = event.filter;
}
</script>
