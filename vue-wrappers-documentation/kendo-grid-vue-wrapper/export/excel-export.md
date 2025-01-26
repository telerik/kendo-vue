---
title: Excel Export
page_title: Vue Grid Wrapper - Excel Export - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to export its content to an xlsx file."
slug: excel_export_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/excel-export/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/excel-export"></WrapperBanner></div>

# Excel Export

The built-in export functionality of the Kendo UI Grid wrapper for Vue allows you to share and distribute data in Excel.

> To configure the Excel export functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug exporting_grid %}).

## Basics

The Kendo UI Data Grid wrapper for Vue enables you to export data to MS Excel and provides client Excel-export functionality which is server-agnostic and which can be directly utilized to share data offline. To enable the export to Excel, include the corresponding command to the toolbar of the Grid and configure the settings accordingly. Alternatively, you can trigger the export to Excel by invoking the `saveAsExcel` method from the client API of the Grid.

{% meta height:660 %}
{% embed_file grid/export/excel/basic/main.vue preview %}
{% embed_file grid/export/excel/basic/main.js %}
{% endmeta %}

## Copying to Excel

To enable users to copy cell content from web applications and paste in Excel, use the built-in functionality and set the `selectable->multi cell` and `allow-copy->true` properties. As a result, the user can copy and paste across applications and use the browser clipboard.

The following example demonstrates how to select the desired cells, copy the content by pressing the `Ctrl`+`C` command and paste to Excel.

{% meta height:660 %}
{% embed_file grid/export/excel/copy/main.vue preview %}
{% embed_file grid/export/excel/copy/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Excel Export in the Native Vue Grid by Kendo UI]({% slug exporting_grid %})
