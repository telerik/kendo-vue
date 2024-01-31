---
title: Hide the all day row in the Scheduler
description: An example on how you can hide the all day row in the Scheduler
type: how-to
page_title: Hide the all day row - Kendo UI for Vue Native Scheduler
slug: scheduler-hide-all-day-row
tags: scheduler, hide all day row
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.1.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How to hide the Scheduler all day row?

## Solution

This can be achieved with CSS:

```html
<style>
  .k-scheduler-head .k-scheduler-group.k-group-horizontal:nth-of-type(2),
  .k-scheduler-head .k-event {
    display: none;
  }
</style>
```

### Runnable example

{% meta id:index height:800 %}
{% embed_file scheduler-hide-all-day/main.vue preview %}
{% embed_file scheduler-hide-all-day/events-utc.js %}
{% embed_file scheduler-hide-all-day/main.js %}
{% endmeta %}
