<template>
  <div>
    <KButton @click="toggleProductNameVisibility">
      Toggle ProductName Visibility
    </KButton>
    <KButton @click="toggleCategoryNameVisibility">
      Toggle CategoryName Visibility
    </KButton>
    <Grid
      :style="{ height: '400px' }"
      :data-items="dataItems"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import products from './products.json';

const dataItems = ref(products);
const isProductNameHidden = ref(false);
const isCategoryNameHidden = ref(false);

const columns = computed(() => [
    { field: 'ProductID' },
    {
        field: 'ProductName',
        title: 'Product Name',
        hidden: isProductNameHidden.value,
    },
    {
        field: 'Category.CategoryName',
        title: 'Category Name',
        hidden: isCategoryNameHidden.value,
    },
    { field: 'UnitPrice', title: 'Unit Price' },
    {
        field: 'UnitsInStock',
        title: 'In Stock',
        media: '(max-width: 700px)',
    },
]);

function toggleProductNameVisibility() {
    isProductNameHidden.value = !isProductNameHidden.value;
}

function toggleCategoryNameVisibility() {
    isCategoryNameHidden.value = !isCategoryNameHidden.value;
}
</script>
