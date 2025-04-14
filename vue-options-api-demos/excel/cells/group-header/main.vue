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

export default {
  components: {
      'kbutton': Button
    },
    data: function () {
        return {
          group: [ { field: 'Category.CategoryName' } ],
          groupHeaderCellOptions: { background: '#ff0000' }
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
                columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
                  { 
                    field: 'Category.CategoryName', 
                    title: 'Category', hidden: true,                 
                    groupHeaderCellOptions: this.groupHeaderCellOptions 
                  },
              ]
            });
        },
    }
};

</script>
