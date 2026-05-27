<template>
  <div>
    <KButton @click="exportPDFWithComp">Export pdf via a component</KButton>
    <GridPdfExport ref="gridPdfExport">
      <Grid
        :data-items="items"
        :skip="skip"
        :take="take"
        :total="total"
        :pageable="pageable"
        :page-size="pageSize"
        @pagechange="pageChangeHandler"
        :columns="columns"
      />
    </GridPdfExport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const skip = ref(0);
const take = ref(10);
const pageSize = ref(10);
const products = ref([]);
const pageable = {
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    previousNext: true,
};
const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

const items = computed(() => products.value.slice(skip.value, take.value + skip.value));
const total = computed(() => products.value.length);
const gridPdfExport = ref(null);

function exportPDFWithComp() {
    gridPdfExport.value.save(items.value);
}

function pageChangeHandler(event) {
    skip.value = event.page.skip;
    take.value = event.page.take;
}

function createRandomData(count) {
    const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
    }));
}

products.value = createRandomData(1000);
</script>
