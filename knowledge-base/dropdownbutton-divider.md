---
title: Add a divider between items in the DropDownButton
description: An example of how to add a divider between each item in a DropDownButton
type: how-to
page_title: Add a divider for items in the DropDownButton - Kendo UI Vue Native DropDownButton
slug: dropdownbutton-divider
tags: divider, dropdownbutton, items
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>6.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I add a divider between my items in the DropDownButton?

## Solution

This can be achieved by creating a custom item with an `hr` element and passing it to the [`itemRender`]({% slug api_buttons_dropdownbutton %}#toc-itemRender) prop:

{% meta height: 420 %}
{% embed_file dropdownbutton-divider/main.vue preview %}
{% embed_file dropdownbutton-divider/main.js %}
{% endmeta %}

