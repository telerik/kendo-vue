---
title: Workbook Customization
description: "Customize a specific cell or row when working with the Kendo Vue UI Excel Export component in Vue projects."
slug: workbook_excelexport_vue
position: 3
---

# Workbook Customization

In some cases, the customization of all cells in a column might not be sufficient to achieve the results your project requires.

To customize a specific row or cell:

1. Get the generated [options]({% slug api_excel-export_workbookoptions %}) through the [`workbookOptions`]({% slug api_excel-export_excelexportoptions %}#toc-workbookoptions) method.
2. Modify them according to your needs.
3. Save the file by using the exporter [`saveAs`]({% slug api_excel-export_excelexportoptions %}#toc-save) method.

The following example demonstrates how to set the color for alternating rows.

{% meta height:300 %}
{% embed_file workbook/main.vue preview %}
{% embed_file workbook/main.js %}
{% embed_file workbook/products.json %}
{% endmeta %}

## Suggested Links

* [API Reference of the Excel Export functionaity]({% slug api_excel-export %})
