---
title: PDF Export
description: "Get started with the Kendo UI for Vue Native TreeList which supports the export to PDF."
slug: overview_pdfexport_treelist
position: 100
---

# PDF Export

The data of the Native TreeList component can be easily exported to a PDF file. Depending on the requirements of the targeted scenario, you can modify the exported data the way you need it. The current article covers three popular data export scenarios:

* [Export of the visible TreeList data](#toc-getting-started)
* [Export of all items loaded in the TreeList data](#toc-exporting-specific-data)
* [Export the data from selected TreeList columns](#toc-customizing-exported-columns)

## Getting Started

To enable the PDF export:

1. Install `kendo-vue-pdf` package.

    ```sh-no-run
    npm install @progress/kendo-vue-pdf @progress/kendo-licensing
    ```

1. Import the TreeListPDFExport component in your Vue Application.

    ```jsx-no-run
    import { TreeListPDFExport } from '@progress/kendo-vue-pdf';
    ```

1. Wrap the TreeList inside a TreeListPDFExport component.

1. Define a `ref` of the TreeListPDFExport.

1. Call the [`save`]({% slug api_pdf_treelistpdfexportprops %}#toc-save) function of the TreeListPDFExport component.

The following example demonstrates the basic implementation of the PDF export functionality of the TreeList.

{% meta height:590 %}
{% embed_file pdf/basic/main.vue preview %}
{% embed_file pdf/basic/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}


### Exporting All the Data loaded in the TreeList

To export specific TreeList data, pass the data to the [`save`]({% slug api_pdf_treelistpdfexportprops %}#toc-save) function of the TreeListPDFExport component. For example, if the TreeList has its paging enabled but you need to export all pages and all records expanded, pass the processed data to the `save` function.

{% meta height:590 %}
{% embed_file pdf/all-data-expanded/main.vue preview %}
{% embed_file pdf/all-data-expanded/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

### Customizing Exported Columns

The TreeListPDFExport provides the ability to add or hide some of the columns in the exported PDF file. This is done by passing the columns that have to be exported to the [`save`]({% slug api_pdf_treelistpdfexportprops %}#toc-save) function.

{% meta height:590 %}
{% embed_file pdf/columns-modification/main.vue preview %}
{% embed_file pdf/columns-modification/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Known Limitations

For full list of the PDF export known limitations refer to the [drawing package]({% slug limitationsbrowsersupport_drawing %}).

## Suggested Links

* [API Reference of the TreeList Component]({% slug api_treelist_treelistprops %})
