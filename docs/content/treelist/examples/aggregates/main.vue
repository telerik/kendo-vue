<template>
  <div>
    <TreeList
      :style="{ maxHeight: '430px', overflow: 'auto', width: '100%' }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :data-items="processData"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import employees from './data';
import {
    TreeList,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([]);
const dataItems = ref([...employees]);

const columns = [
    { field: 'name', title: 'Name', width: '34%', expandable: true },
    { field: 'position', title: 'Position', width: '33%' },
    { field: 'hireDate', title: 'Hire Date', width: '33%', format: '{0:MMMM d, yyyy}' },
];

const processData = computed(() => {
    const data = addExpandField(dataItems.value);
    const result = mapTree(data, subItemsField, aggregateSubItems);
    return aggregateSubItems({ [subItemsField]: result })[subItemsField];
});

function aggregateSubItems(item) {
    const subItems = item[subItemsField];
    if (subItems && subItems.length) {
        const lastHireDate = subItems.reduce(
            (acc, curr) => Math.max(acc, curr.hireDate, curr.lastHireDate || acc),
            new Date(0)
        );
        const date = new Date(lastHireDate);
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        const hireDateString = `Last employee hired on ${month} ${day}, ${year}`;
        const employeesCount = subItems.reduce(
            (acc, curr) => acc + (curr.employeesCount || 0) + 1,
            0
        );
        const aggregateItem = {
            footer: true,
            name: `${employeesCount} employee(s)`,
            hireDate: hireDateString,
        };
        return extendDataItem(item, subItemsField, {
            employeesCount,
            lastHireDate,
            [subItemsField]: [...subItems, aggregateItem],
        });
    }
    return item;
}

function onExpandChange(event) {
    expanded.value = event.value
        ? expanded.value.filter((id) => id !== event.dataItem.id)
        : [...expanded.value, event.dataItem.id];
}

function addExpandField(dataArr) {
    return mapTree(dataArr, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
            expanded: expanded.value.includes(item.id),
        })
    );
}
</script>
