---
title: Implement Scrolling to the Bottom for the Kendo UI for Vue Native ListBox
description: An example on how to implement scroll-to-bottom behavior for the Kendo UI for Vue Native ListBox
type: how-to
page_title: Scroll to Bottom - Kendo UI for Vue Native ListBox
slug: listbox-scroll-to-bottom
tags: listbox, scroll, scroll to bottom
ticketid: 1662799
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

I want to implement a scroll-to-bottom behavior for the ListBox when an item is dragged and dropped or when an item is transferred between ListBoxes.

## Solution

To implement the scroll-to-bottom behavior, first, obtain a reference to the ListBox component. In the [onToolClick]({% slug api_listbox_listboxtoolbarprops %}#toc-ontoolbarclick) event of the `ListBoxToolbar` and the [onDrop]({% slug api_listbox_listboxprops %}#toc-ondrop) event of the ListBox, use the `scrollIntoView` method to scroll to the bottom whenever an item is dropped or transferred using the arrows.

{% meta height:480 %}
{% embed_file listbox-scroll-to-bottom/main.vue preview %}
{% embed_file listbox-scroll-to-bottom/main.js %}
{% endmeta %}
