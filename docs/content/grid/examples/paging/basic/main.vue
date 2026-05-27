<template>
  <Grid
    :style="{ height: '450px' }"
    :data-items="result"
    :pageable="true"
    :skip="skip"
    :take="take"
    :total="total"
    :columns="columns"
    @pagechange="pageChangeHandler"
    :show-loader="showLoader"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const showLoader = ref(false);
const dataItems = ref([]);
const skip = ref(0);
const take = ref(10);

const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

const result = computed(() => dataItems.value.slice(skip.value, take.value + skip.value));
const total = computed(() => (dataItems.value ? dataItems.value.length : 0));

function pageChangeHandler(event) {
    showLoader.value = true;
    setTimeout(() => {
        showLoader.value = false;
        skip.value = event.page.skip;
        take.value = event.page.take;
    }, 300);
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

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
}

onMounted(() => {
    dataItems.value = createRandomData(1000);
});
</script>
