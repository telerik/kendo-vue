---
title: Clear the value of the DropDownList 
description: An example on how to clear the value of the DropDownList
type: how-to
page_title: Clear the value of the DropDownList - Kendo UI for Vue DropDownList
slug: dropdownlist-clear-value
tags: clear, dropdownlist, kendovue
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

How to clear the value of a DropDownList?

## Solution

A custom clear button can be added by defining a custom template and passing it to the [`valueRender`]({% slug api_dropdowns_dropdownlistprops %}#toc-valuerender)prop of the DropDownList component.

{% meta height: 420 %}
{% embed_file dropdownlist-clear-value/main.vue preview %}
{% embed_file dropdownlist-clear-value/main.js %}
{% embed_file dropdownlist-clear-value/ValueRender.vue %}
{% embed_file dropdownlist-clear-value/countries.js %}
{% endmeta %}

