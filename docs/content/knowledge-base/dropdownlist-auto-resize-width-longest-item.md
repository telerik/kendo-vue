---
title: Auto-Resizing Kendo UI for Vue DropdownList to Fit Longest List Item
description: Learn how to make the Kendo UI for Vue DropdownList automatically adjust its width to fit the longest item in its list.
type: how-to
page_title: Adjusting Kendo UI for Vue DropdownList Width Based on Longest Item
slug: dropdownlist-auto-resize-width-longest-item
tags:  dropdownlist, resize, item, width
res_type: kb
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>6.4.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue DropDownList</td>
	    </tr>
    </tbody>
</table>

## Description

When using the [Kendo UI for Vue DropDownList](slug:overview_dropdownlist), the width does not automatically adjust to fit the longest item in the list unless explicitly set. By default, the component renders with a fixed width based on its container or the initially selected value. This can result in long items being cut off before any selection is made.

This knowledge base article also answers the following questions:

-   How can I make Kendo UI for Vue DropDownList auto-resize to fit the longest item?
-   What is the workaround for clipping long items in Kendo UI for Vue DropDownList?
-   How to programmatically set the width of Kendo UI for Vue DropDownList?

## Solution

To ensure the Kendo UI for Vue DropDownList adjusts its width to fit the longest item from the start, calculate the width of the longest item in the list programmatically and set the style.width property of the component.

The following example showcases the described approach in action:

{% meta height: 420 %}
{% embed_file dropdownlist-auto-resize-longest-item/main.vue preview %}
{% embed_file dropdownlist-auto-resize-longest-item/main.js %}
{% endmeta %}


## See Also

- [Kendo UI for Vue DropDownList Documentation](slug:overview_dropdownlist)
- [Kendo UI for Vue Dropdowns Overview](slug:overview_dropdowns)


