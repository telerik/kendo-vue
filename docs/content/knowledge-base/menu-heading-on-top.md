---
title: Add headings to each level of the Kendo UI for Vue Native Menu items
description: Learn how to add headings to each level of the Kendo UI for Vue Native Menu items
type: how-to
page_title: How to add headings to each level of the Kendo UI for Vue Native Menu items
slug: menu-heading-on-top
tags: menu, heading, top, menuitem
res_type: kb
category: knowledge-base
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
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to add headings at the top of each Popup of the Menu and the sub-menus with different text.

## Solution

Use custom content rendering of a `MenuItem` through the [contentRender]({% slug api_layout_menuitemmodel %}#toc-contentrender) return a structure with the heading element and a nested Menu. Do the same for each new level that you want to add with a heading.

The following example showcases the described approach in action:

{% meta height:500 %}
{% embed_file menu-heading-on-top/main.vue preview %}
{% embed_file menu-heading-on-top/main.js %}
{% endmeta %}

## See Also

- [Kendo UI for Vue Menu Documentation](slug:overview_menu)
- [Kendo UI for Vue Menu API Reference](slug:api_layout_menu)
