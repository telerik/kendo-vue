<template>
  <div ref="divWrapper">
    <Grid
      ref="grid"
      style="height: 440px;"
      :data-items="gridData"
      :resizable="true"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;
const minGridWidth = ref(0);
const gridCurrent = ref(0);
const setMinWidth = ref(false);
const gridData = ref(products);
const columns = ref([]);
const divWrapper = ref(null);

const columnsData = [
    { field: 'ProductID', title: 'ID', minWidth: 50 },
    { field: 'ProductName', title: 'Name', minWidth: 200 },
    { field: 'Category.CategoryName', title: 'CategoryName', minWidth: 200 },
    { field: 'UnitPrice', title: 'Price', minWidth: 100 },
    { field: 'UnitsInStock', title: 'In stock', minWidth: 100 },
];

const defineColumns = () => {
    columns.value = columnsData.map((column) => ({
        field: column.field,
        title: column.title,
        width: setWidth(column.minWidth),
    }));
};

const setWidth = (minWidth) => {
    let width = setMinWidth.value
        ? minWidth
        : minWidth + (gridCurrent.value - minGridWidth.value) / columnsData.length;
    width = width < COLUMN_MIN ? width : width - ADJUST_PADDING;
    return width;
};

const handleResize = () => {
    const gridElement = divWrapper.value.querySelector('.k-grid');
    if (gridElement.offsetWidth < minGridWidth.value && !setMinWidth.value) {
        setMinWidth.value = true;
    } else if (gridElement.offsetWidth > minGridWidth.value) {
        gridCurrent.value = gridElement.offsetWidth;
        setMinWidth.value = false;
    }
    defineColumns();
};

onMounted(() => {
    const gridElement = divWrapper.value.querySelector('.k-grid');
    columnsData.forEach((item) => {
        minGridWidth.value += item.minWidth;
    });
    gridCurrent.value = gridElement.offsetWidth;
    setMinWidth.value = gridElement.offsetWidth < minGridWidth.value;
    defineColumns();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
