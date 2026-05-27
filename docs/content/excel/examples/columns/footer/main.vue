<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { aggregateBy } from '@progress/kendo-data-query';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const aggregates = [{ field: 'UnitPrice', aggregate: 'sum' }];
const total = aggregateBy(products, aggregates);

const CustomFooter = () => `Sum: ${total.UnitPrice.sum}`;

const exportExcel = () => {
    saveExcel({
        data: products,
        fileName: 'Products',
        columns: [
            { field: 'ProductID' },
            { field: 'ProductName', title: 'Product Name' },
            { field: 'UnitPrice', title: 'Unit Price', footer: CustomFooter },
        ],
    });
};
</script>
