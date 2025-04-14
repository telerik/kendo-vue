<template>
  <div>
      <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
  </div>
</template>

<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { process } from '@progress/kendo-data-query';
import products from './products.json';
import { Button } from '@progress/kendo-vue-buttons';

const CustomGroupFooterUnitPrice = (props) => (`Sum: ${props.aggregates.UnitPrice.sum.toFixed(2)}`);
const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ];


export default {
    components: {
      'kbutton': Button
    },
    data: function () {
        return {
          group: [ 
                {
                  field: 'Discontinued',
                  aggregates: aggregates
                }
            ],
          groupFooterCellOptions: { background: '#ff0000' },
        }
    },
    computed: {
        data: function(){
          return process(products, {
              group: this.group,
              aggregates: aggregates
          }).data;
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
                  { 
                    field: 'UnitPrice', 
                    title: 'UnitPrice',               
                    groupFooterCellOptions: this.groupFooterCellOptions,
                    groupFooter: CustomGroupFooterUnitPrice
                  },
              ]
            });
        },
    }
};

</script>
