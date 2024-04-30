---
title: Add a badge to the Calendar cells based on a condition
description: An example on how to show a badge based on a condition in the Kendo UI for Vue Calendar.
type: how-to
page_title: Conditionally render a badge - Kendo UI for Vue Calendar
slug: calendar-add-badge-conditionally
tags: calendar, kendo ui for vue, badge, cell, conditionally
res_type: kb
category: knowledge-base
---

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.3.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

How can I render a badge for specific calendar cells based on a condition?

## Solution

Use the [`cell`](slug:api_dateinputs_calendarprops#toc_cell) prop to render a custom component that will render a [Badge](slug:overview_badge) based on the required condition. 

### Runnable example

The following example showcases how to render the Badge for the first three dates:
 
{% meta id:index height:560 %}
{% embed_file calendar-add-badge-conditionally/main.vue preview %}
{% embed_file calendar-add-badge-conditionally/Cell.vue %}
{% embed_file calendar-add-badge-conditionally/main.js %}
{% endmeta %}
