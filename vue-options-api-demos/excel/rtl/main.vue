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
    methods: {
        exportExcel () {
            saveExcel({
                data: products,
                fileName: "Products",
                dir:"rtl",
                columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
              ]
            });
        },
    }
};

</script>
