<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { aggregateBy, process } from '@progress/kendo-data-query';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const aggregates = [{ field: 'UnitPrice', aggregate: 'sum' }];
const group = [{ field: 'Discontinued', aggregates }];
const data = process(products, { group }).data;
const total = aggregateBy(products, aggregates);

const headerCellConfig = ref({ textAlign: 'center' });
const footerCellConfig = ref({ wrap: true, textAlign: 'center' });
const groupFooterCellConfig = ref({ textAlign: 'right' });

const CustomGroupHeader = (props) => `Discontinued: ${props.value}`;
const CustomGroupFooter = (props) =>
    `SUM: \\$ ${props.aggregates.UnitPrice.sum.toFixed(2)}`;
const CustomFooter = (props) =>
    `Total ${props.column.title}: \\$${total.UnitPrice.sum}`;

const exportExcel = () => {
    saveExcel({
        data,
        group,
        fileName: 'Products.xlsx',
        columns: [
            { field: 'ProductID', locked: true, width: 200 },
            { field: 'ProductName', title: 'Product Name', width: 350 },
            {
                title: 'Availability',
                headerCellOptions: headerCellConfig.value,
                children: [
                    {
                        field: 'UnitPrice',
                        title: 'Price',
                        cellOptions: { format: '$#,##0.00' },
                        width: 150,
                        footerCellOptions: footerCellConfig.value,
                        groupFooterCellOptions: groupFooterCellConfig.value,
                        groupFooter: CustomGroupFooter,
                        footer: CustomFooter,
                    },
                    { field: 'UnitsOnOrder', title: 'Units on Order' },
                    { field: 'UnitsInStock', title: 'Units in Stock' },
                ],
            },
            {
                field: 'Discontinued',
                title: 'Discontinued',
                hidden: true,
                groupHeader: CustomGroupHeader,
            },
        ],
    });
};
</script>
