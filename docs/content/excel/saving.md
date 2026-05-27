---
title: Saving Files on the Server
description: "Save the exported files on the server when working with the Kendo UI for Vue Excel Export functionality in Vue projects."
slug: filesaving_excelexport_vue
position: 5
---

# Saving Files on the Server

Using the Kendo UI for Vue Excel Export functionality, you can send the generated Excel file to a remote service.

To save a file on the server:

1. Use the [`toDataURL`]({% slug api_excel-export_excelexportoptions %}#toc-todataurl) method to get the base64-encoded contents.
1. Post the contents to the server.

```jsx-no-run
<template>
  <div>
      <button @click="exportExcel" class="k-button">Export Excel</button>
  </div>
</template>

<script>
import { toDataURL } from '@progress/kendo-vue-excel-export';
import products from './products.json';

export default {
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
          toDataURL({
            data: products,
            fileName: "myFile",
            columns: this.columns
          }).then((dataURL) => {
            const base64 = dataURL.split(";base64,")[1];

            fetch(SAVE_URL, {
                method: 'POST',
                body: {
                    base64: base64,
                    fileName: this.fileName
                }
            });
        });
      }
    }
};

</script>
```

## Suggested Links

* [API Reference of the Excel Export functionaity]({% slug api_excel-export %})
