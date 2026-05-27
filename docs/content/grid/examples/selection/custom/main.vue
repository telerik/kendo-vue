<template>
  <Grid
    ref="grid"
    :style="{ height: '520px' }"
    :data-items="products"
    :selected-field="selectedField"
    :columns="columns"
    @selectionchange="onSelectionChange"
    @headerselectionchange="onHeaderSelectionChange"
    @rowclick="onRowClick"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { products as productData } from './products';

const selectedField = 'selected';
const products = ref(
    productData.map((item) => ({ ...item, selected: false }))
);
const staticColumns = [
    { field: 'ProductID', title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
];

const areAllSelected = computed(() =>
    products.value.findIndex((item) => item.selected === false) === -1
);

const columns = computed(() => [
    { field: 'selected', width: '50px', headerSelectionValue: areAllSelected.value },
    ...staticColumns,
]);

function onHeaderSelectionChange(event) {
    const checked = event.event.target.checked;
    products.value = products.value.map((item) => ({
        ...item,
        selected: checked,
    }));
}

function onSelectionChange(event) {
    event.dataItem[selectedField] = !event.dataItem[selectedField];
}

function onRowClick(event) {
    event.dataItem[selectedField] = !event.dataItem[selectedField];
}
</script>
