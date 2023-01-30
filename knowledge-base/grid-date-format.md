---
title: Modify the Date Format in the Grid
description: An example on how to format ISO string dates in the Kendo UI for Vue Data Grid.
type: how-to
page_title: Change the Date Format - Kendo UI for Vue Data Grid
slug: grid-date-format
tags: grid, kendovue, dates, format
ticketid: 1402874
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2.2.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® Kendo UI for Vue</td>
		</tr>
	</tbody>
</table>


## Description

How can I change an ISO date string which I have in my Kendo UI for Vue Data Grid? Setting a [`format`](slug:api_grid_gridcolumnprops#toc-format)  property does not affect the current date format.

## Solution

In such case we can use the [`type`](slug:api_grid_gridcolumnprops#toc-type) property and set the correct type of the data that is expected from the server.

{% meta height:380 %}
{% embed_file grid-date-format/main.vue preview %}
{% embed_file grid-date-format/main.js %}
{% endmeta %}