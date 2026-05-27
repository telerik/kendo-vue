<template>
  <div>
    <div class="example-config">
      <KButton @click="exportPDFWithComponent">Export to PDF with component</KButton>
      &nbsp;
      <KButton @click="exportPDFWithMethod">Export to PDF with method</KButton>
    </div>

    <PDFExport ref="PdfExport">
      <Grid ref="grid" :data-items="gridData" :columns="columns" />
    </PDFExport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PDFExport, savePDF } from '@progress/kendo-vue-pdf';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const gridData = ref(products);
const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'Category.CategoryName', title: 'Category Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
];

const PdfExport = ref(null);
const grid = ref(null);

function exportPDFWithComponent() {
    PdfExport.value.save();
}

function exportPDFWithMethod() {
    savePDF(grid.value.$el, {
        paperSize: 'A4',
    });
}
</script>
