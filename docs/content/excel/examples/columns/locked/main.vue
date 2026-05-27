<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const fields = ref(Object.keys(products[0]));

const columnsToExport = computed(() =>
    fields.value.map((field) => ({
        field,
        locked: field === 'ProductID',
        width: 200,
    }))
);

const exportExcel = () => {
    saveExcel({
        data: products,
        fileName: 'Products',
        columns: columnsToExport.value,
    });
};
</script>
