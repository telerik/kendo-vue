<template>
  <div>
    <div class="example-config">
      <KButton @click="exportPDFWithMethod">Export with method</KButton>
    </div>

    <div id="exportContent" ref="container">
      <Grid :data-items="items" :columns="columns" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const items = ref([
    {
        ProductID: 1,
        ProductName: 'Chai',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '10 boxes x 20 bags',
        UnitPrice: 18.0,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales',
        },
    },
]);

const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

function exportPDFWithMethod() {
    const gridElement = document.getElementsByClassName('k-grid')[0];

    drawDOM(gridElement, { paperSize: 'A3', margin: 100 })
        .then((group) => exportPDF(group))
        .then((dataUri) => {
            console.log(dataUri.split(';base64,')[1]);
        });
}
</script>
