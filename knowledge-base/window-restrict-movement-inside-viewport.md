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
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

The Kendo UI for Vue Native Window component can be dragged anywhere on the screen by the end user. How to restrict the end user from dragging it beyond a container viewport?

## Solution 

You can achieve that by using the Window position to determine if it is inside the set boundaries of the desired area and to restrict its movement inside them.
In the [onMove]({% slug api_dialogs_windowprops %}#toc-onmove) event, you can get the left and top CSS positions of the Window component. You can use them to control the left and top positions of the Window, by setting them to state variables at a specific condition, and passing them to the [left]({% slug api_dialogs_windowprops %}#toc-left) and [top]({% slug api_dialogs_windowprops %}#toc-top) properties of the Window component.


### Runnable example

To test the following example, drag around the Window:

{% meta id:index height:480 %}
{% embed_file window-restrict-movement-inside-viewport/main.vue preview %}
{% embed_file window-restrict-movement-inside-viewport/main.js %}
{% endmeta %}






