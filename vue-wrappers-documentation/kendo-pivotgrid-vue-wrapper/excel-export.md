---
title: Excel Export
page_title: Excel Export - PivotGrid - Kendo UI for Vue
description: "Explore the Excel export options provided by the Kendo UI PivotGrid wrapper for Vue."
slug: excel_export_pivotgrid
position: 3
---

<div><WrapperBanner></WrapperBanner></div>

# Excel Export

The built-in export functionality of the PivotGrid allows you to share and distribute data in Excel.

## Basics

The PivotGrid enables you to export data to MS Excel and provides client Excel-export functionality which is server-agnostic and which can be directly utilized to share data offline. To trigger the export to Excel, invoke the [`saveAsExcel`](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/methods/saveasexcel) method of the PivotGrid. In order for the Excel export to work, add a reference to the `jszip` library on the page by either using NPM and assigning the global `window.JSZip` variable or by adding the script from CDN with the <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.js"></script> code. 

{% meta height:490 %}
{% embed_file excel/main.vue preview %}
{% embed_file excel/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI PivotGrid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/pivotgrid/overview)
* [API Reference of the PivotGrid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid)
