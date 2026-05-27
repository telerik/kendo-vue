<template>
  <div>
    <KButton :theme-color="'primary'" @click="exportExcel">Export Excel</KButton>
    <Grid
      :style="{ height: '280px' }"
      :data-items="items"
      :columns="columns"
    >
    </Grid>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const items = ref([]);
const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
]);

function exportExcel() {
    saveExcel({
        data: items.value,
        fileName: 'myFile',
        columns: [
            { field: 'ProductID' },
            { field: 'ProductName', title: 'Product Name' },
        ],
    });
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
            ProductName:
        productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
}

onMounted(() => {
    items.value = createRandomData(1000);
});
</script>
