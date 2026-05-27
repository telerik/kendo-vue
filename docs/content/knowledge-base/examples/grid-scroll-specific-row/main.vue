<template>
  <div>
    <button @click="scrollToRow">Scroll to Row 15</button>
    <div @keydown="handleKeyDown">
      <Grid
        ref="grid"
        :style="{ height: '410px' }"
        :data-items="items"
        :selected-field="selectedField"
        :columns="columns"
        @rowclick="handleRowClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const grid = ref(null);
const selectedField = ref('selected');
const selectedItem = ref({
    ProductID: 48,
    ProductName: 'Chocolade',
    SupplierID: 22,
    CategoryID: 3,
    QuantityPerUnit: '10 pkgs.',
    UnitPrice: 12.75,
    UnitsInStock: 15,
    UnitsOnOrder: 70,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
        CategoryID: 3,
        CategoryName: 'Confections',
        Description: 'Desserts, candies, and sweet breads',
    },
});
const columns = ref([
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' },
]);

const items = computed(() =>
    products.map((item) => ({
        ...item,
        selected: selectedItem.value
            ? item.ProductID === selectedItem.value.ProductID
            : false,
    }))
);

const scrollToRow = () => {
    const productIDToScroll = 15;
    const index = products.findIndex((item) => item.ProductID === productIDToScroll);

    if (index !== -1) {
        const gridScrollHeight = 36;
        grid.value.vs.container.scrollTop = index * gridScrollHeight;
        selectedItem.value = products[index];
    }
};
</script>
