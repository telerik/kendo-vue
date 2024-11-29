---
title: Transfer Items From One ListBox to Another on DoubleClick
description: An example on how to transfer items from one ListBox to another on doubleclick
type: how-to
page_title: Transfer Items From One ListBox to Another on DoubleClick - KendoUI for Vue Native ListBox
slug: listbox-transfer-item-on-double-click
tags: listbox, doubleclick, transfer, items
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

I want to transfer items from one ListBox to another on double click without using the toolbar?

## Solution

To achieve this, render a custom [item]({% slug api_common_listbox %}#item), attach a double-click event to it, and implement the transfer logic.

{% meta height:500 %}
{% embed_file listbox-transfer-item-on-double-click/main.vue preview %}
{% embed_file listbox-transfer-item-on-double-click/main.js %}
{% embed_file listbox-transfer-item-on-double-click/products.json %}
{% endmeta %}
