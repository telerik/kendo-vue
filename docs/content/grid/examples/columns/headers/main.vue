<template>
  <Grid
    :style="{ height: '420px' }"
    :data-items="products"
    :resizable="true"
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
    { field: 'ProductID', title: 'ID', width: '40px', resizable: false },
    {
        title: 'Product Information',
        children: [
            { field: 'ProductName', title: 'Name' },
            {
                title: 'Unit',
                children: [
                    { field: 'UnitPrice', title: 'Price' },
                    { field: 'UnitsInStock', title: 'In stock' },
                ],
            },
        ],
    },
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
    const units = [5, 1, 54, 555, 16, 293, 654, 42, 89, 90, 32, 293, 412];

    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        UnitsInStock: units[Math.floor(Math.random() * units.length)],
    }));
}
</script>
