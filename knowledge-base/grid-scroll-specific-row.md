---
title: Scroll to a specific row in the Kendo UI for Vue Native Grid
description: Learn how scroll to a specific row in the Kendo UI for Vue Native Grid
type: how-to
page_title: How to scroll to a specific row in the Kendo UI for Vue Native Grid
slug: grid-scroll-specific-row
tags: grid, scroll, rows, row
ticketid: 1660190
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I scroll to a specific row in the Grid when clicking a button?

## Solution

This can be achieved by implementing a custom `scrollToRow` function that calculates the correct scroll position based on the row index and updates `this.selectedItem` to select the desired row while scrolling to its position

{% meta id:index height:760 %}
{% embed_file grid-scroll-specific-row/main.vue preview %}
{% embed_file grid-scroll-specific-row/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}
