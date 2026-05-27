<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { process } from '@progress/kendo-data-query';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const group = ref([{ field: 'Category.CategoryName' }]);
const headerPaddingCellOptions = ref({ background: '#ff0000' });

const data = computed(() =>
    process(products, {
        group: group.value,
    }).data
);

const exportExcel = () => {
    saveExcel({
        data: data.value,
        group: group.value,
        fileName: 'Products',
        paddingCellOptions: headerPaddingCellOptions.value,
        columns: [
            { field: 'ProductID' },
            { field: 'ProductName', title: 'Product Name' },
            { field: 'Category.CategoryName', title: 'Category', hidden: true },
        ],
    });
};
</script>
