<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const exportExcel = () => {
    saveExcel({
        data: products,
        fileName: 'Products',
        filterable: true,
        columns: [
            { field: 'ProductID' },
            { field: 'ProductName', title: 'Product Name' },
        ],
    });
};
</script>
