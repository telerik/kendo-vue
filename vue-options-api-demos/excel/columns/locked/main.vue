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
    computed: {
      columnsToExport: function(){
        return this.getColumns()
        }
    },  
    data: function () {
        return {
          fields: Object.keys(products[0]),
        }
    },
    methods: {
        exportExcel () {
            saveExcel({
                data: products,
                fileName: "Products",
                columns: this.columnsToExport
            });
        },
        getColumns(){
          const columnsToExport = [];

          this.fields.forEach((field)=>columnsToExport.push({ field:field, locked: field === 'ProductID', width:200}));
            
          return columnsToExport;
        }
      }
};

</script>
