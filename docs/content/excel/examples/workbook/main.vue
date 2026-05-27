<template>
  <div>
    <KButton theme-color="primary" @click="exportExcel">Export Excel</KButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { saveAs } from '@progress/kendo-file-saver';
import products from './products.json';

const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
]);

const exportExcel = () => {
    customSaveExcel({
        data: products,
        fileName: 'myFile',
        columns: columns.value,
    });
};

const customSaveExcel = (exportOptions) => {
    const saveFn = (dataURL) => {
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
};
</script>
