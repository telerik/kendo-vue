<template>
  <Grid :data-items="items" :columns="columns">
    <template #myTemplate="{ props }">
      <CustomCell
        :data-item="props.dataItem"
        @dragover="reorder"
        @dragstart="setActive"
        @dragend="updateRemote"
      />
    </template>
  </Grid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import CustomCell from './CustomCell.vue';

const items = ref([]);
const activeItem = ref(null);

const columns = ref([
    { field: 'ProductID', title: '', cell: 'myTemplate', width: '80px' },
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
]);

function createRandomData(count) {
    const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
    }));
}

function reorder(dataItem) {
    if (activeItem.value === dataItem) {
        return;
    }

    const reorderedData = [...items.value];
    const prevIndex = reorderedData.findIndex((p) => p === activeItem.value);
    const nextIndex = reorderedData.findIndex((p) => p === dataItem);

    reorderedData.splice(prevIndex, 1);
    reorderedData.splice(nextIndex, 0, activeItem.value);

    items.value = reorderedData;
}

function setActive(dataItem) {
    activeItem.value = dataItem;
}

function updateRemote() {
    console.log('in drag end');
    // Send request to remote to update the source order
}

onMounted(() => {
    items.value = createRandomData(10);
});
</script>
