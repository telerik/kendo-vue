<template>
  <Grid
    :style="{ height: '400px' }"
    :data-items="products"
    :reorderable="true"
    @columnreorder="columnReorder"
    :columns="columns"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const products = ref(createRandomData(500));
const columns = ref([
    { field: 'ProductID', title: 'ID', minResizableWidth: '30' },
    { field: 'ProductName', title: 'Name' },
    { field: 'UnitPrice', title: 'Price' },
]);

const columnReorder = (options) => {
    columns.value = options.columns;
};

function createRandomData(count) {
    const productNames = [
        'Aniseed Syrup',
        "Chef Anton's Cajun Seasoning",
        "Chef Anton's Gumbo Mix",
        "Grandma's Boysenberry Spread",
        "Uncle Bob's Organic Dried Pears",
        'Northwoods Cranberry Sauce',
        'Mishi Kobe Niku',
    ];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
    }));
}
</script>
