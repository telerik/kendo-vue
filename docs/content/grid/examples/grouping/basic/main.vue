<template>
  <Grid
    ref="grid"
    :style="{ height: '520px' }"
    :data-items="gridData"
    :resizable="true"
    :reorderable="true"
    :sortable="true"
    :pageable="gridPageable"
    :groupable="true"
    :group="group"
    :take="take"
    :skip="skip"
    :columns="columns"
    :show-loader="showLoader"
    @datastatechange="dataStateChange"
  >
  </Grid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

const gridPageable = ref({ pageSizes: true });
const products = ref(createRandomData(1000));
const gridData = ref([]);
const skip = ref(0);
const take = ref(10);
const group = ref([{ field: 'UnitsInStock' }]);
const columns = ref([
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
]);
const showLoader = ref(false);

function getData() {
    showLoader.value = true;
    setTimeout(() => {
        showLoader.value = false;
        gridData.value = process(products.value, {
            take: take.value,
            skip: skip.value,
            group: group.value,
        });
    }, 300);
}

function createAppState(dataState) {
    group.value = dataState.group;
    take.value = dataState.take;
    skip.value = dataState.skip;
    getData();
}

function dataStateChange(event) {
    createAppState(event.data);
}

function createRandomData(count) {
    const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
    ];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
    const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName:
        productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
            UnitsInStock: units[Math.floor(Math.random() * units.length)],
        }));
}

onMounted(() => {
    getData();
});
</script>
