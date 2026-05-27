<template>
  <Grid :data-items="items" :selected-field="selectedField" :columns="columns">
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
import { ref, onMounted } from "vue";
import { Grid } from "@progress/kendo-vue-grid";
import CustomCell from "./CustomCell.vue";

const selectedField = ref("selected");
const items = ref([]);
const columns = ref([
    { field: "ProductID", title: "Reorder", cell: "myTemplate", width: "80px" },
    { field: "ProductID" },
    { field: "ProductName", title: "Product Name" },
    { field: "UnitPrice", title: "Unit Price" },
]);
const activeItem = ref(null);

function createRandomData(count) {
    const productNames = [
        "Chai",
        "Chang",
        "Syrup",
        "Apple",
        "Orange",
        "Banana",
        "Lemon",
        "Pineapple",
        "Tea",
        "Milk",
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
    if (activeItem.value === dataItem) {
        return;
    }

    const reorderedData = items.value.slice();
    const prevIndex = reorderedData.findIndex((p) => p === activeItem.value);
    const nextIndex = reorderedData.findIndex((p) => p === dataItem);
    reorderedData.splice(prevIndex, 1);
    reorderedData.splice(nextIndex, 0, activeItem.value);

    items.value = reorderedData;
}

function setActive(dataItem) {
    activeItem.value = dataItem;
    activeItem.value.selected = true;
}

function updateRemote() {
    console.log("in drag end");
    activeItem.value = {};
    items.value = items.value.map((i) => {
        i.selected = undefined;
        return i;
    });
}

onMounted(() => {
    items.value = createRandomData(10);
});
</script>

<style>
</style>
