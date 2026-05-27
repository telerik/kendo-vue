<template>
  <div ref="divWrapper" style="width: 70%">
    <Grid style="height: 400px" :data-items="products" :columns="columns" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const divWrapper = ref(null);
const gridWidth = ref(0);

const setPercentage = (percentage) => {
    return Math.round(gridWidth.value / 100) * percentage;
};

const columns = computed(() => [
    { field: 'ProductID', title: 'ID', width: setPercentage(10) },
    { field: 'ProductName', title: 'Name', width: setPercentage(30) },
    { field: 'Category.CategoryName', title: 'CategoryName', width: setPercentage(30) },
    { field: 'UnitPrice', title: 'Price', width: setPercentage(15) },
    { field: 'UnitsInStock', title: 'In stock', width: setPercentage(15) },
]);

const updateGridWidth = () => {
    gridWidth.value = divWrapper.value.offsetWidth;
};

onMounted(() => {
    updateGridWidth();
    window.addEventListener('resize', updateGridWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateGridWidth);
});
</script>
