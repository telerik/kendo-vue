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

const CustomGroupHeader = (props) => (`Category: ${props.value}`);

export default {
    components: {
      'kbutton': Button
    },
    computed: {
        data: function(){
          return process(products, {
              group: this.group
          }).data;
        }
    },
    data: function () {
        return {
          group: [ { field: 'Category.CategoryName' } ],
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
                  { field: 'Category.CategoryName', hidden: true, groupHeader: CustomGroupHeader },
              ]
            });
        },
    }
};

</script>
