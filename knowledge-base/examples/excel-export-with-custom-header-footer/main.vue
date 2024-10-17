<template>
    <div>
      <kbutton :theme-color="'primary'" @click="exportExcel"
        >Export Excel</kbutton
      >
    </div>
  </template>
  
  <script>
  import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
  import { Button } from '@progress/kendo-vue-buttons';
  import { saveAs } from '@progress/kendo-file-saver';
  
  export default {
    components: {
      kbutton: Button,
    },
    data() {
      return {
        products: [
          {
            ProductID: 1,
            ProductName: 'Chai',
            UnitPrice: 18,
            UnitsInStock: 39,
            Discontinued: false,
          },
          {
            ProductID: 2,
            ProductName: 'Chang',
            UnitPrice: 19,
            UnitsInStock: 17,
            Discontinued: false,
          },
          {
            ProductID: 3,
            ProductName: 'Aniseed Syrup',
            UnitPrice: 10,
            UnitsInStock: 13,
            Discontinued: false,
          },
          {
            ProductID: 4,
            ProductName: "Chef Anton's Cajun Seasoning",
            UnitPrice: 22,
            UnitsInStock: 53,
            Discontinued: false,
          },
          {
            ProductID: 5,
            ProductName: "Chef Anton's Gumbo Mix",
            UnitPrice: 21.35,
            UnitsInStock: 0,
            Discontinued: true,
          },
        ],
        columns: [
          { field: 'ProductID', title: 'Product ID' },
          { field: 'ProductName', title: 'Product Name' },
          { field: 'UnitPrice', title: 'Unit Price' },
          { field: 'UnitsInStock', title: 'In Stock' },
          { field: 'Discontinued', title: 'Discontinued' },
        ],
      };
    },
    methods: {
      exportExcel() {
        this.customSaveExcel({
          data: this.products,
          fileName: 'Products.xlsx',
          columns: this.columns,
        });
      },
      customSaveExcel(exportOptions) {
        const saveFn = (dataURL) => {
          saveAs(dataURL, exportOptions.fileName);
        };
  
        const options = workbookOptions(exportOptions);
        const rows = options.sheets[0].rows;
  
        const headerRow = {
          height: 70,
          cells: [
            {
              value: `Product List ${new Date().getFullYear()}`,
              fontSize: 30,
              colSpan: 5,
            },
          ],
        };
  
        const footerRow = {
          height: 70,
          cells: [{ value: `Total revenue 1 000 000`, fontSize: 30, colSpan: 5 }],
        };
  
        rows.unshift(headerRow);
        rows.push(footerRow);
  
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
      },
    },
  };
  </script>
  