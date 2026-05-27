---
title: Columns
description: "Configure the columns that will be exported by the Excel Export component in Vue projects."
slug: columns_excelexport_vue
position: 1
---

# Columns

When using the `saveExcel` method we can pass to it options for the customization of the columns that will be exported to Excel.

You can specify the following column options:

* [Hidden state](#toc-hidden-state)
* [Locked state](#toc-locked-state)
* [Templates](#toc-templates)
* [Multi-column headers](#toc-multi-column-headers)

## Hidden State

To hide a particular column from the exported file, use the [`hidden`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-hidden) column configuration.

{% meta height:300 %}
{% embed_file columns/hidden/main.vue preview %}
{% embed_file columns/hidden/main.js preview %}
{% embed_file columns/hidden/products.json %}
{% endmeta %}

## Locked State

When exporting to Excel, we can lock columns by defining the [`locked`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-locked) property for the selected columns. As a result, you can display specific columns at all times while the user scrolls the Excel file.

{% meta height:300 %}
{% embed_file columns/locked/main.vue preview %}
{% embed_file columns/locked/main.js  %}
{% embed_file columns/locked/products.json %}
{% endmeta %}

## Templates

The Excel Export functionality supports templates that you can use for customizing the group and footer elements.

> The templates must return text content. HTML elements cannot be converted to Excel column values.

### Group Header Template

You can use the group header template to customize the header rows of the groups. To use a custom template set the [`groupHeader`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-groupheader) property of selected column to a Function or a Vue Component.

{% meta height:300 %}
{% embed_file columns/group-header/main.vue preview %}
{% embed_file columns/group-header/main.js %}
{% embed_file columns/group-header/products.json %}
{% endmeta %}

### Group Footer Template

You can use the group footer template to customize the footer rows of the groups. To use a custom template set the [`groupFooter`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-groupfooter) property of a column to a Function or a Vue Component.

{% meta height:300 %}
{% embed_file columns/group-footer/main.vue preview %}
{% embed_file columns/group-footer/main.js %}
{% embed_file columns/group-footer/products.json %}
{% endmeta %}

### Footer Template

You can use the footer template to customize the column footer. To use a custom template set the [`footer`]({% slug api_excel-export_excelexportcolumnoptions %}#toc-footer) property of selected column to a Function or a Vue Component .

{% meta height:300 %}
{% embed_file columns/footer/main.vue preview %}
{% embed_file columns/footer/main.js %}
{% embed_file columns/footer/products.json %}
{% endmeta %}

## Multi-Column Headers

The `saveExcel` method supports multi-column headers by using column groups.

{% meta height:300 %}
{% embed_file columns/multi/main.vue preview %}
{% embed_file columns/multi/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Excel Export functionaity]({% slug api_excel-export %})
