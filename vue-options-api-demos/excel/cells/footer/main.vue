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

const CustomFooter = (props) => (`Sum: ${total.UnitPrice.sum}`);

const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ];
const data = products;
const total = aggregateBy(products, aggregates);

export default {
    components: {
      'kbutton': Button
    },
    data: function () {
        return {
          footerCellConfig: { background: '#ff0000' },
        }
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: data,
                group: this.group,
                fileName: "Products",
                columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
                  { 
                    field: 'UnitPrice', 
                    title: 'UnitPrice',  
                    footerCellOptions: this.footerCellConfig,
                    footer: CustomFooter      
                  },
              ]
            });
        },
    }
};

</script>
