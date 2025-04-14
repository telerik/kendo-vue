<template>
<div>
    <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
</div>
</template>
<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import products from './products.json';
import { process } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-vue-buttons';

const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ];
const CustomGroupFooter = (props) => (`Sum: ${props.aggregates.UnitPrice.sum.toFixed(2)}`);

export default {
    components: {
      'kbutton': Button
    },
    computed: {
        data: function(){
          return process(products, {
              group: this.group,
              aggregates: aggregates
          }).data;
        }
    },
    data: function () {
        return {
          group: [ {  field: 'Discontinued',  aggregates: aggregates } ],
        }
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: this.data,
                group: this.group,
                fileName: "Products",
                columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
                  { field: 'UnitPrice', title: 'Unit Price', groupFooter: CustomGroupFooter },
              ]
            });
        },
    }
};

</script>
