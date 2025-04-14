<template>
<div>
    <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
</div>
</template>
<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import products from './products.json';
import { aggregateBy,process } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-vue-buttons';

const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ];
const group = [ { field: 'Discontinued', aggregates: aggregates } ];
const data = process(products, {
    group: group
}).data;
const total = aggregateBy(products, aggregates);

const CustomGroupHeader = (props) => (`Discontinued: ${props.value}`);

const CustomGroupFooter = (props) => (`SUM: \$ ${(props.aggregates.UnitPrice.sum).toFixed(2)}`);

const CustomFooter = (props) =>
    (`Total ${props.column.title}: \$ ${total.UnitPrice.sum}`);

export default {
    components: {
      'kbutton': Button
    },
    data(){
      return {
        headerCellConfig: { textAlign: 'center' },
        footerCellConfig: { wrap: true, textAlign: 'center' },
        groupFooterCellConfig: {textAlign: 'right' }
      }
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: data,
                group: group,
                fileName:"Products.xlsx",
                columns: [
                  { field: 'ProductID', locked: true, width:200},
                  { field: 'ProductName', title: 'Product Name', width: 350 },
                  { 
                    title: 'Availability', headerCellOptions: this.headerCellConfig , children: [
                        { 
                          field: 'UnitPrice', 
                          title: 'Price',
                          cellOptions: { format: '$#,##0.00' },
                          width:150,
                          footerCellOptions: this.footerCellConfig,
                          groupFooterCellOptions: this.groupFooterCellConfig,
                          groupFooter: CustomGroupFooter,
                          footer: CustomFooter
                        },
                        { field: 'UnitsOnOrder', title: 'Units on Order' },
                        { field: 'UnitsInStock', title: 'Units in Stock' }
                    ]
                  },
                  { 
                    field: 'Discontinued', 
                    title: 'Discontinued', 
                    hidden: true,  
                    groupHeader: CustomGroupHeader
                  }
              ]
            });
        },
    }
};

</script>
