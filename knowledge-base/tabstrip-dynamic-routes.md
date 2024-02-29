---
title: Add dynamic routes to the TabStrip
description: An example on how to add dynamic routes to the TabStrip
type: how-to
page_title: Add Dynamic Routes to the TabStrip - Kendo UI for Vue Native TabStrip
slug: tabstrip-add-dynamic-routes
tags: tabstrip, routes, dynamic, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.3.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

This Knowledge base(KB) article shows how you can set dynamic routes to the TabStrip component.

## Solution

This can be achieved by binding the selected tab to the current route, users can navigate between tabs with their content dynamically loaded based on the URL.

{% meta id:index height:400 %}
{% embed_file tabstrip-dynamic-routes/main.vue preview %}
{% embed_file tabstrip-dynamic-routes/main.js %}
{% embed_file tabstrip-dynamic-routes/TabOne.vue %}
{% embed_file tabstrip-dynamic-routes/TabTwo.vue %}
{% endmeta %}
