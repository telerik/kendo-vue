---
title: Change the Height of the Grid Programmatically After the Page Loads
description: An example on how to change the height of the Grid programmatically after the page loads
type: how-to
page_title: Change the Height of the Grid Programmatically After the Page Loads - Kendo UI for Vue Native Grid
slug: grid-adjust-height-after-page-loads
tags: grid, page, loads, height, programmatically
ticketid: 1659873
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

Is there a way to change the height of the Grid programmatically after the page loads?

## Solution

This can be achieved by passing a ref to the Grid and then changing the height as required in the `mounted` hook.

{% meta id:index height:400 %}
{% embed_file grid-adjust-height-after-page-loads/main.vue preview %}
{% embed_file grid-adjust-height-after-page-loads/main.js %}
{% endmeta %}
