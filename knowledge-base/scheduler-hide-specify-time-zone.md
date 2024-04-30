---
title: Hide the Specify time zone in the Scheduler
description: An example of how to hide the Specify time zone in the Scheduler
type: how-to
page_title: Learn how to hide the Specify time zone in the Scheduler edit form
slug: scheduler-hide-specify-time-zone
tags: scheduler, specify, time,zone, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

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

How can I hide the Specify time zone in the Scheduler edit form?

## Solution

This can be achieved by setting `display: none` to the `k-form-field` using `nth-of-type`:

```html
<style>
  .k-form-field:nth-of-type(3) {
    display: none !important;
   }   
</style>
```

### Runnable example

{% meta id:index height:800 %}
{% embed_file scheduler-hide-specify-time-zone/main.vue preview %}
{% embed_file scheduler-hide-specify-time-zone/events-utc.js %}
{% embed_file scheduler-hide-specify-time-zone/main.js %}
{% endmeta %}
