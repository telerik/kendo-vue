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

const aggregates = [{ field: 'UnitPrice', aggregate: 'sum' }];
const group = ref([{ field: 'Discontinued', aggregates }]);

const data = computed(() =>
    process(products, {
        group: group.value,
        aggregates,
    }).data
);

const CustomGroupFooter = (props) => `Sum: ${props.aggregates.UnitPrice.sum.toFixed(2)}`;

const exportExcel = () => {
    saveExcel({
        data: data.value,
        group: group.value,
        fileName: 'Products',
        columns: [
            { field: 'ProductID' },
            { field: 'ProductName', title: 'Product Name' },
            { field: 'UnitPrice', title: 'Unit Price', groupFooter: CustomGroupFooter },
        ],
    });
};
</script>
