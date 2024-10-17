---
title: Export Data to Excel with Custom Header and Footer
description: An example on how to export data to Excel with a custom header and footer
type: how-to
page_title: Export Data to Excel with Custom Headers and Footers - Kendo UI for Vue ExcelExport
slug: excel-export-with-custom-header-footer
tags: kendovue, export, excel, header, footer, workbook
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I add a custom header and footer to the exported data to Excel?

## Solution

This can be achieved by customizing the [Workbook](https://www.telerik.com/kendo-vue-ui/components/excel-export/customization/) component, enabling you to add new rows, such as headers and footers, to the existing rows collection before exporting the data.

{% meta height: 420 %}
{% embed_file excel-export-with-custom-header-footer/main.vue preview %}
{% embed_file excel-export-with-custom-header-footer/main.js %}
{% endmeta %}
