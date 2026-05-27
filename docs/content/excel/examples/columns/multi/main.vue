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

const headerCellConfig = ref({ textAlign: 'center' });

const exportExcel = () => {
    saveExcel({
        data: products,
        fileName: 'Products.xlsx',
        columns: [
            { field: 'ProductID', title: 'Product ID' },
            { field: 'ProductName', title: 'Product Name' },
            {
                title: 'Availability',
                headerCellOptions: headerCellConfig.value,
                children: [
                    { field: 'UnitPrice', title: 'Unit Price' },
                    { field: 'UnitsOnOrder', title: 'Units on Order' },
                    { field: 'UnitsInStock', title: 'Units in Stock' },
                ],
            },
        ],
    });
};
</script>
