---
title: Reducing Data Grid Column Header Height in Kendo UI for Vue
description: Learn how to reduce the column header height in Kendo UI for Vue Data Grid using custom CSS.
type: how-to
page_title: Adjusting Header Height in Kendo UI for Vue Data Grid
slug: grid-reduce-header-height
tags: grid, kendovue, header, css, styling
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® Kendo UI for Vue Data Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to reduce the height of column headers in the Kendo UI for Vue Data Grid to match specific design requirements.

This knowledge base article also answers the following questions:

-   How to change Kendo UI for Vue Data Grid header height?
-   How to apply custom styling to Kendo UI for Vue Data Grid headers?
-   How to reduce padding in Kendo UI for Vue Data Grid headers?

## Solution

To reduce the column header height in Kendo UI for Vue Data Grid, apply custom CSS targeting the relevant header elements. The header uses the `.k-table-th` and `.k-table-thead` classes, which can be styled directly.

Follow these steps:

1. Create a CSS file or add styles to your existing stylesheet.
2. Target the grid header elements with the `.k-table-thead th.k-table-th` selector.
3. Adjust the `height`, `padding-top`, `padding-bottom`, and `line-height` properties to match your design needs.

The described approach can be seen in action here:

{% meta height:310 %}
{% embed_file grid-reduce-header-height/main.vue preview %}
{% embed_file grid-reduce-header-height/main.js %}
{% embed_file grid-reduce-header-height/style.css %}
{% embed_file grid-reduce-header-height/products.json %}
{% endmeta %}
