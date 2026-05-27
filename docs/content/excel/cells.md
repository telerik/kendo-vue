---
title: Cells
description: "Configure the cells that will be exported by the Kendo UI for Vue Excel Export component in Vue projects."
slug: cells_excelexport_vue
position: 2
---

# Cells

The `saveExcel` method supports options for customizing the cells that will be exported to Excel.

You can specify the following options for the file that will be exported:

* [Header padding cells](#toc-header-padding-cells)
* [Padding cells](#toc-padding-cells)
* [Header cells](#toc-header-cells)
* [Data cells](#toc-data-cells)
* [Group header cells](#toc-group-header-cells)
* [Group footer cells](#toc-group-footer-cells)
* [Footer cells](#toc-footer-cells)

## Header Padding Cells

The header padding cells are the cells that are inserted before the header cells to align the headers and the column values when the data is grouped. To specify custom options, set the [`headerPaddingCellOptions`]({% slug api_excel-export_excelexportoptions %}#toc-headerpaddingcelloptions) property in the object passed to the `saveExcel` method.

{% meta height:300 %}
{% embed_file cells/header-padding/main.vue preview %}
{% embed_file cells/header-padding/main.js %}
{% embed_file cells/header-padding/products.json %}
{% endmeta %}

## Padding Cells

The padding cells are the cells that are inserted before the data, group, and footer cells to indicate the group hierarchy if the data is grouped. To specify custom options, set the [`paddingCellOptions`]({% slug api_excel-export_excelexportoptions %}#toc-paddingcelloptions) property in the object passed to the `saveExcel` method.

{% meta height:300 %}
{% embed_file cells/padding/main.vue preview %}
{% embed_file cells/padding/main.js %}
{% embed_file cells/padding/products.json %}
{% endmeta %}

## Header Cells

To specify custom options for a column-header cell, set the [`headerCellOptions`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-headercelloptions) property when defining a selected column.

{% meta height:300 %}
{% embed_file cells/header/main.vue preview %}
{% embed_file cells/header/main.js %}
{% embed_file cells/header/products.json %}
{% endmeta %}

## Data Cells

To specify custom options for a column data cell, set the [`cellOptions`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-celloptions) property when defining a column.

{% meta height:300 %}
{% embed_file cells/data/main.vue preview %}
{% embed_file cells/data/main.js %}
{% embed_file cells/data/products.json %}
{% endmeta %}

## Group Header Cells

To specify custom options for a group header cell of a column, set the [`groupHeaderCellOptions`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-groupheadercelloptions) property when defining a column.

{% meta height:300 %}
{% embed_file cells/group-header/main.vue preview %}
{% embed_file cells/group-header/main.js %}
{% embed_file cells/group-header/products.json %}
{% endmeta %}

## Group Footer Cells

To specify custom options for a group footer cell of a column, set the [`groupFooterCellOptions`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-groupfootercelloptions) property when defining a column.

{% meta height:300 %}
{% embed_file cells/group-footer/main.vue preview %}
{% embed_file cells/group-footer/main.js %}
{% embed_file cells/group-footer/products.json %}
{% endmeta %}

## Footer Cells

To specify custom options for a column footer cell, set the [`footerCellOptions`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-footercelloptions) property when defining a column.

{% meta height:300 %}
{% embed_file cells/footer/main.vue preview %}
{% embed_file cells/footer/main.js %}
{% embed_file cells/footer/products.json %}
{% endmeta %}

## Suggested Links

* [API Reference of the Excel Export functionaity]({% slug api_excel-export %})
