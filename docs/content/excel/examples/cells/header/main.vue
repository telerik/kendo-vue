<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const headerCellOptionsConfig = ref({
    background: '#ff0000',
    textAlign: 'center',
});

const exportExcel = () => {
    saveExcel({
        data: products,
        fileName: 'Products',
        columns: [
            { field: 'ProductID', headerCellOptions: headerCellOptionsConfig.value },
            { field: 'ProductName', title: 'Product Name' },
        ],
    });
};
</script>
