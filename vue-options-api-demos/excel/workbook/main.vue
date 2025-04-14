<template>
  <div>
      <kbutton :theme-color="'primary'" @click="exportExcel">Export Excel</kbutton>
  </div>
</template>
<script>
import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
import { Button } from '@progress/kendo-vue-buttons';
import { saveAs } from '@progress/kendo-file-saver';
import products from './products.json';

export default {
    components: {
      'kbutton': Button
    },
    data: function () {
        return {
          columns: [
                  { field: 'ProductID'},
                  { field: 'ProductName', title: 'Product Name' },
              ]
        }
    },
    methods: {
        exportExcel () {
          this.customSaveExcel({
            data: products,
            fileName: "myFile",
            columns: this.columns
          });
        },
        customSaveExcel: function(exportOptions) {
          const saveFn = dataURL => {
            saveAs(dataURL, exportOptions.fileName);
          };

          const options = workbookOptions(exportOptions);
          const rows = options.sheets[0].rows;

          let altIdx = 0;
          rows.forEach((row) => {
              if (row.type === 'data') {
                  if (altIdx % 2 !== 0) {
                      row.cells.forEach((cell) => {
                          cell.background = '#aabbcc';
                      });
                  }
                  altIdx++;
              }
          });
          toDataURL(options).then(saveFn);
      }
    }
};

</script>
