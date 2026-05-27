<template>
  <Grid
    ref="grid"
    :style="{ height: '440px' }"
    :data-items="gridData"
    :row-height="rowHeight"
    :cell-render="'cellRenderTemplate'"
    :columns="columns"
  >
    <template #cellRenderTemplate="{ props }">
      <td
        v-if="props.dataItem.locked || props.field === 'locked'"
        :style="[
          {
            top: getTop(props.dataItem) + 'px',
            bottom: getBottom(props.dataItem) + 'px',
            'text-align': centerText(props.field),
          },
        ]"
        :class="classNames(props.dataItem, props.className)"
        @click="handleLockRowChange(props.dataItem) && props.field === 'locked'"
      >
        <SvgIcon
          v-if="props.dataItem.locked && props.field === 'locked'"
          :icon="pinIcon"
        />
        <SvgIcon
          v-else-if="!props.dataItem.locked && props.field === 'locked'"
          :icon="unpinIcon"
        />
        <span v-else> {{ getNestedValue(props.field, props.dataItem) }} </span>
      </td>
      <td v-else>
        {{ getNestedValue(props.field, props.dataItem) }}
      </td>
    </template>
  </Grid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { SvgIcon } from '@progress/kendo-vue-common';
import { pinIcon, unpinIcon } from '@progress/kendo-svg-icons';
import products from './products.json';
import { filterBy } from '@progress/kendo-data-query';

const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;
let minGridWidth = 0;

const columnsData = [
    { field: 'locked', filterable: false, minWidth: 50 },
    { field: 'ProductID', filterable: false, editable: false, title: 'ID', minWidth: 45 },
    { field: 'ProductName', title: 'Name', minWidth: 350 },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price', minWidth: 120 },
    { field: 'UnitsInStock', title: 'Units', filter: 'numeric', minWidth: 100, editor: 'numeric' },
    { field: 'Discontinued', title: 'Discontinued', editor: 'boolean', minWidth: 150 },
];

const filterDescriptorLocked = {
    logic: 'and',
    filters: [{ field: 'locked', operator: 'eq', value: true }],
};

const gridData = ref(products);
const allLockedRows = ref([]);
const rowHeight = ref(50);
const columns = ref([]);
const setMinWidth = ref(false);
const gridCurrent = ref(0);

function handleLockRowChange(dataItem) {
    const itemIndex = gridData.value.findIndex((item) => item.ProductID === dataItem.ProductID);
    const newData = [...gridData.value];
    newData[itemIndex].locked = !newData[itemIndex].locked;
    gridData.value = newData;
    allLockedRows.value = filterBy(newData, filterDescriptorLocked);
}

function getNestedValue(fieldName, dataItem) {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
}

function getTop(dataItem) {
    const indexOfLockedItem = allLockedRows.value.findIndex((item) => dataItem.ProductID === item.ProductID);
    return indexOfLockedItem * rowHeight.value;
}

function getBottom(dataItem) {
    const indexOfLockedItem = allLockedRows.value.findIndex((item) => dataItem.ProductID === item.ProductID);
    const numberOfLockedRows = allLockedRows.value.length;
    return (numberOfLockedRows - indexOfLockedItem - 1) * rowHeight.value;
}

function classNames(dataItem, className) {
    return dataItem.locked ? className + ' k-grid-row-sticky' : className;
}

function centerText(field) {
    return field === 'locked' ? 'center' : '';
}

function defineColumns() {
    columns.value = columnsData.map((column) => ({
        field: column.field,
        title: column.title,
        width: setWidth(column.minWidth),
    }));
}

function setWidth(minWidth) {
    let width = setMinWidth.value
        ? minWidth
        : minWidth + (gridCurrent.value - minGridWidth) / columns.value.length;
    width < COLUMN_MIN ? width : (width -= ADJUST_PADDING);
    return width;
}

function handleResize() {
    const grid = document.querySelector('.k-grid');
    if (grid.offsetWidth < minGridWidth && !setMinWidth.value) {
        setMinWidth.value = true;
    } else if (grid.offsetWidth > minGridWidth) {
        gridCurrent.value = grid.offsetWidth;
        setMinWidth.value = false;
    }
    defineColumns();
}

onMounted(() => {
    const grid = document.querySelector('.k-grid');
    window.addEventListener('resize', handleResize);
    columnsData.forEach((item) => (minGridWidth += item.minWidth));
    gridCurrent.value = grid.offsetWidth;
    setMinWidth.value = grid.offsetWidth < minGridWidth;
    defineColumns();
});
</script>
