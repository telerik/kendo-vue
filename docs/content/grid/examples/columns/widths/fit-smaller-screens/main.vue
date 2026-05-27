<template>
  <div ref="divWrapper">
    <Grid
      ref="grid"
      style="height: 400px"
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

const gridData = ref(products);
const columns = ref([]);
const divWrapper = ref(null);

const columnsData = [
    { field: 'ProductID', title: 'ID' },
    { field: 'ProductName', title: 'Name' },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price', minGridWidth: 500 },
    { field: 'UnitsInStock', title: 'In stock', minGridWidth: 600 },
];

const defineColumns = () => {
    columns.value = columnsData.map((column) => ({
        field: column.field,
        title: column.title,
    }));
};

const handleResize = () => {
    const gridElement = divWrapper.value.querySelector('.k-grid');
    const currentVisibleColumns = columnsData.filter(
        (c) => !(c.minGridWidth > gridElement.offsetWidth)
    );
    if (currentVisibleColumns.length !== columns.value.length) {
        columns.value = currentVisibleColumns;
    }
};

onMounted(() => {
    defineColumns();
    handleResize();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
