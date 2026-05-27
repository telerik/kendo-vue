<template>
  <Grid :data-items="items" :columns="columns">
    <template #myTemplate="{ props }">
      <custom
        :data-item="props.dataItem"
        @dragover="reorder"
        @dragstart="setActive"
        @dragend="updateRemote"
      />
    </template>
  </Grid>
  <br />
  <br />
  <br />
  <Grid :data-items="items2" :columns="columns">
    <template #myTemplate="{ props }">
      <CustomCell
        :data-item="props.dataItem"
        @dragover="reorder2"
        @dragstart="setActive"
        @dragend="updateRemote"
      />
    </template>
    <GridNoRecords @dragover="addRecordToEmptyGrid">
      <div>Drop the item here</div>
    </GridNoRecords>
  </Grid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid, GridNoRecords } from '@progress/kendo-vue-grid';
import CustomCell from './CustomCell.vue';

const items = ref([]);
const items2 = ref([]);
const activeItem = ref(null);

const columns = [
    {
        field: 'Drag',
        title: '',
        cell: 'myTemplate',
        width: '80px'
    },
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

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

function reorder(dataItem) {
    if (activeItem.value === dataItem) return;

    const reorderedData = [...items.value];
    const reorderedDataItemsArr = [...items2.value];
    const prevIndex = reorderedData.findIndex((p) => p === activeItem.value);
    const nextIndex = reorderedData.findIndex((p) => p === dataItem);

    if (prevIndex !== -1) {
        reorderedData.splice(prevIndex, 1);
        reorderedData.splice(nextIndex, 0, activeItem.value);
    } else {
        reorderedData.push(activeItem.value);
        const itemsArrActiveElementIndex = reorderedDataItemsArr.findIndex(
            (p) => p === activeItem.value
        );
        reorderedDataItemsArr.splice(itemsArrActiveElementIndex, 1);
    }
    items.value = reorderedData;
    items2.value = reorderedDataItemsArr;
}

function reorder2(dataItem) {
    if (activeItem.value === dataItem) return;

    const reorderedData = [...items2.value];
    const reorderedDataItemsArr = [...items.value];
    const prevIndex = reorderedData.findIndex((p) => p === activeItem.value);
    const nextIndex = reorderedData.findIndex((p) => p === dataItem);

    if (prevIndex !== -1) {
        reorderedData.splice(prevIndex, 1);
        reorderedData.splice(nextIndex, 0, activeItem.value);
    } else {
        reorderedData.push(activeItem.value);
        const itemsArrActiveElementIndex = reorderedDataItemsArr.findIndex(
            (p) => p === activeItem.value
        );
        reorderedDataItemsArr.splice(itemsArrActiveElementIndex, 1);
    }
    items2.value = reorderedData;
    items.value = reorderedDataItemsArr;
}

function setActive(dataItem) {
    activeItem.value = dataItem;
}

function updateRemote() {
    console.log('Drag end. Send request to remote to update the source order');
}

function addRecordToEmptyGrid() {
    items2.value.push(activeItem.value);

    const reorderedDataItemsArr = [...items.value];
    const itemsArrActiveElementIndex = reorderedDataItemsArr.findIndex(
        (p) => p === activeItem.value
    );
    reorderedDataItemsArr.splice(itemsArrActiveElementIndex, 1);
    items.value = reorderedDataItemsArr;
}

onMounted(() => {
    items.value = createRandomData(10);
    items2.value = [];
});
</script>
