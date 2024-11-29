---
title: Export Expanded Rows Data from TreeList to Excel
description: An example of exporting the expanded rows of a TreeList to Excel without needing to expand them manually.
type: how-to
page_title: Export Expanded Rows Data from TreeList to Excel - Kendo UI Vue Native TreeList
slug: excel-export-treelist-expanded-rows
tags: export, excel, treelist, expand
ticketid: 1666953
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>6.0.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native TreeList</td>
	    </tr>
    </tbody>
</table>

## Description

Currently, I need to manually expand the rows to include the child rows in the exported Excel file. How can I have the rows automatically expand for the `ExcelExport` automatically when exporting?

## Solution

This can be achieved by using the [mapTree]({% slug api_treelist_maptree %}#mapTree) function to expand the TreeList rows and then passing the data to the `ExcelExport`.

{% meta height:760 %}
{% embed_file excel-export-treelist-expanded-rows/main.vue preview %}
{% embed_file excel-export-treelist-expanded-rows/main.js %}
{% embed_file excel-export-treelist-expanded-rows/data.js %}
{% endmeta %}
