---
title:  Open URL in a new window when clicking on a Kendo UI Vue Native Menu item
description: Learn how to open an URL in a new window when clicking on a Kendo UI Vue Native Menu item
type: how-to
page_title: How to open an URL in a new window when clicking on a Kendo UI Vue Native Menu item
slug: menu-open-url-in-new-window
tags: menu,url,open,window
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
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to open the URL from a Menu item in a new window.

## Solution

To customize the default behavior of the Kendo Vue Menu and how it handles the URL set in a MenuItem, define a custom [`linkRender`]({% slug api_layout_menuitemmodel %}#toc-linkrender) slot for the Menu. Within the custom `linkRender`, render an `<a>` element for menu items, bind its `:href` to `props.item.url`, and add a `@click.stop.prevent` handler that calls `window.open(props.item.url, '_blank')` to manually open the link in a new window. By handling the anchor element this way, you override the Menu’s default navigation and ensure that the links always open in a new tab under your control.

The following example demonstrates this approach in action:

{% meta height:500 %}
{% embed_file menu-open-url-in-new-window/main.vue preview %}
{% embed_file menu-open-url-in-new-window/main.js %}
{% endmeta %}

## See Also

- [Kendo UI for Vue Menu Documentation]({% slug overview_menu %})
- [Kendo UI for Vue Menu API Reference]({% slug api_layout_menu %})
