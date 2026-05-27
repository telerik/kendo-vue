<template>
  aaa
  <TreeList
    :style="{ maxHeight: '510px', overflow: 'auto' }"
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
  >
    <template #myCellTemplate="{ props }">
      <td :class="props.class">
        <span :style="{ color: props.value ? 'green' : 'red' }">
          {{ props.value }}
        </span>
      </td>
    </template>
    <template #zeroColumnCellTemplate="{ props }">
      <td
        :class="props.class"
        :colspan="props.colSpan"
        :aria-colindex="props['aria-colindex']"
        :aria-expanded="props['aria-expanded']"
        :aria-selected="props['aria-selected']"
        :role="props.role"
        :data-grid-col-index="props['data-grid-col-index']"
      >
        <span
          class="k-treelist-toggle k-icon k-svg-icon"
          v-for="(iteration, index) in props.level.slice(1)"
          :key="index"
        ></span>
        <span
          @click="
            onExpandChange({
              dataItem: props.dataItem,
              value: props['aria-expanded'],
            })
          "
          :data-prevent-selection="true"
        >
          <SvgIcon
            :icon="props['aria-expanded']
              ? chevronDownIcon
              : props.dataItem['employees']
              ? chevronRightIcon
              : undefined"
          />
        </span>
        <b style="color: brown">{{ props.value }}</b>
      </td>
    </template>
  </TreeList>
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
import { chevronDownIcon, chevronRightIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-vue-common';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([1, 2, 32]);
const filter = ref([]);
const sort = ref([{ field: 'name', dir: 'asc' }]);
const columns = [
    {
        field: 'name',
        title: 'Name',
        expandable: true,
        width: '40%',
        cell: 'zeroColumnCellTemplate',
    },
    { field: 'position', title: 'Position', width: '40%' },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '20%',
        cell: 'myCellTemplate',
    },
];

const processedData = computed(() => {
    const filteredData = filterBy(employees, filter.value, subItemsField);
    const sortedData = orderBy(filteredData, sort.value, subItemsField);
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
