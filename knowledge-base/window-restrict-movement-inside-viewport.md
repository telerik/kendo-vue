---
title: How to restrict the movement of the Window inside the viewport
description: An example that showcases how to restrict the movement of the Window inside the viewport
type: how-to
page_title: Learn how to restrict the movement of the Window inside the viewport
slug: window-restrict-movement-inside-viewport
tags: window, restrict, viewport, kendovue, native, movement
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.1.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native Window</td>
	    </tr>
    </tbody>
</table>

## Description

The Kendo UI for Vue Native Window component can be dragged anywhere on the screen by the end user. How to restrict the end user from dragging it beyond a container viewport

## Solution 

To restrict the movement of the Kendo UI for Vue Native Window, define a top and left value range, and update the Window's position only if the new left and top values fall within the specified range during the [onMove]({% slug api_dialogs_windowprops %}#toc-onmove) event.


### Runnable example

To test the following example, drag around the Window:

{% meta id:index height:480 %}
{% embed_file window-restrict-movement-inside-viewport/main.vue preview %}
{% embed_file window-restrict-movement-inside-viewport/main.js %}
{% endmeta %}






