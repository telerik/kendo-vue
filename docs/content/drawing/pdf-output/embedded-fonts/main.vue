<template>
  <div>
    <div class="example-config">
      <button @click="exportPDFWithMethod" class="k-button">Export PDF</button>
    </div>

    <div ref="gridPdfExport" style="max-height: 400px">
      <Grid :data-items="items" :columns="columns" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { savePDF } from "@progress/kendo-vue-pdf"
import { Grid } from '@progress/kendo-vue-grid'
import './styles.css'

const gridPdfExport = ref()

const items = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "CategoryID": 1,
        "UnitPrice": 18.0000,
        "UnitsInStock": 39,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages"
        }
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "CategoryID": 1,
        "UnitPrice": 19.0000,
        "UnitsInStock": 17,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages"
        }
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "CategoryID": 2,
        "UnitPrice": 10.0000,
        "UnitsInStock": 13,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments"
        }
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "CategoryID": 2,
        "UnitPrice": 22.0000,
        "UnitsInStock": 53,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments"
        }
    }
]

const columns = [
    { field: 'ProductID', title: 'ID', width: '40px' },
    { field: 'ProductName', title: 'Product Name', width: '250px' },
    { field: 'Category.CategoryName', title: 'Category Name' },
    { field: 'UnitPrice', title: 'Unit Price', width: '80px' },
    { field: 'UnitsInStock', title: 'In stock', width: '80px' },
]

const exportPDFWithMethod = () => {
    savePDF(gridPdfExport.value, {
        paperSize: "A4",
    })
}
</script>
