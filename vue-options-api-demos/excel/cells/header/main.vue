<template>
<div>
    <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
</div>
</template>
<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import products from './products.json';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'kbutton': Button
    },
    data: function () {
        return {
          data: products,
          headerCellOptionsConfig: {
                            background: '#ff0000',
                            textAlign: 'center'
                        }
        }
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: this.data,
                fileName: "Products",
                columns: [
                  { field: 'ProductID', headerCellOptions: this.headerCellOptionsConfig},
                  { field: 'ProductName', title: 'Product Name' },
              ]
            });
        },
    }
};

</script>
