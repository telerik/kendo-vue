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

export default {
    components: {
      'kbutton': Button
    },
    data: function () {
        return {
          group: [ { field: 'Category.CategoryName' } ],
          headerPaddingCellOptions: { background: '#ff0000' }
        }
    },
    methods: {
        data() { 
          return process(products, {
              group: this.group
          }).data;
        },
        exportExcel () {
            saveExcel({
                data: this.data(),
                group: this.group,
                fileName: "Products",
                headerPaddingCellOptions: this.headerPaddingCellOptions,
                columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
                  { field: 'Category.CategoryName', title: 'Category', hidden: true },
              ]
            });
        },
    }
};

</script>
