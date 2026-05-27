<template>
  <div>
    <div class="example-config">
      <Checkbox
        id="unsort"
        :checked="allowUnsort"
        :label="'Enable unsorting'"
        @change="allowUnsortChange"
      />
      <br />
      <Checkbox
        id="multiSort"
        :checked="multiple"
        :label="'Enable multiple columns sorting'"
        @change="multiSortChange"
      />
    </div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :sort="sort"
      :sortable="sortableConfig"
      :data-items="processedData"
      @sortchange="handleSortChange"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Checkbox } from '@progress/kendo-vue-inputs';
import employees from './data';
import {
    TreeList,
    orderBy,
    extendDataItem,
    mapTree,
} from '@progress/kendo-vue-treelist';

const allowUnsort = ref(true);
const multiple = ref(true);
const dataItems = ref([...employees]);
const expanded = ref([1, 2, 32]);
const subItemsField = 'employees';
const expandField = 'expanded';
const sort = ref([{ field: 'name', dir: 'asc' }]);
const columns = ref([
    { field: 'name', title: 'Name', width: '310px', expandable: true },
    { field: 'position', title: 'Position', width: '260px' },
    { field: 'hireDate', title: 'Hire Date', width: '160px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '160px' },
    { field: 'fullTime', title: 'Full Time', width: '150px' },
]);

const processedData = computed(() => {
    return addExpandField(orderBy(dataItems.value, sort.value, subItemsField));
});

const sortableConfig = computed(() => ({
    allowUnsort: allowUnsort.value,
    mode: multiple.value ? 'multiple' : 'single',
}));

function allowUnsortChange(e) {
    allowUnsort.value = e.value;
}

function multiSortChange(e) {
    multiple.value = e.value;
}

function handleSortChange(event) {
    sort.value = event.sort;
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
