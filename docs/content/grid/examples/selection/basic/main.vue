<template>
  <div>
    Selected Item: {{ selectedItem?.ProductID }}, {{ selectedItem?.ProductName }}
    <Grid
      ref="grid"
      :style="{ height: '520px' }"
      :data-items="items"
      :selected-field="selectedField"
      :columns="columns"
      @rowclick="onRowClick"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const selectedField = 'selected';
const selectedID = ref(1);
const products = ref([]);
const columns = [
    { field: 'ProductID', title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
];

const items = computed(() =>
    products.value.map((item) => ({
        ...item,
        selected: item.ProductID === selectedID.value,
    }))
);

const selectedItem = computed(() =>
    products.value.find((item) => item.ProductID === selectedID.value)
);

function onRowClick(event) {
    selectedID.value = event.dataItem.ProductID;
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
            UnitsInStock: Math.floor(Math.random() * 100),
        }));
}

onMounted(() => {
    products.value = createRandomData(1000);
});
</script>
