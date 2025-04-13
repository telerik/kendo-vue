<template>
<div>
    <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
</div>
</template>
<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button } from '@progress/kendo-vue-buttons';
import products from './products.json';

export default {
    components: {
      'kbutton': Button
    },
    data(){
      return {
        headerCellConfig: { textAlign: 'center' },
      }
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: products,
                fileName:"Products.xlsx",
                columns: [
                  { field: 'ProductID', title: 'Product ID'},
                  { field: 'ProductName', title: 'Product Name'},
                  { 
                    title: 'Availability', headerCellOptions: this.headerCellConfig , children: [
                        { field: 'UnitPrice', title: 'Unit Price'},
                        { field: 'UnitsOnOrder', title: 'Units on Order' },
                        { field: 'UnitsInStock', title: 'Units in Stock' }
                    ]
                  }
              ]
            });
        },
    }
};

</script>
