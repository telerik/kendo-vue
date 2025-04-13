<template>
<div>
    <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
</div>
</template>
<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import products from './products.json';
import { aggregateBy } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-vue-buttons';

const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ];
const total = aggregateBy(products, aggregates);

const CustomFooter = (props) => (`Sum: ${total.UnitPrice.sum}`);

export default {
    components: {
      'kbutton': Button
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: products,
                fileName: "Products",
                columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
                  { field: 'UnitPrice', title: 'Unit Price', footer: CustomFooter },
              ]
            });
        },
    }
};

</script>
