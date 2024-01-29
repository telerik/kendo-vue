---
title: Scheduler start and end date values
description: An example on how to retrieve the date values of the first and last slot of the Kendo UI for Vue Scheduler.
type: how-to
page_title: Get the date values of the first and last slot - Kendo UI for Vue Scheduler
slug: scheduler-start-end-date-values
tags: scheduler, kendo ui for vue, start, end, slot, view
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

I want to get the first and last date in my current Scheduler view. These start and end values should be updated when I change the view (DayView, WeekView, etc.), and when I navigate to a different date.

## Solution

Get these values using the `data-slot-start` and `data-slot-end` properties of the SchedulerSlot.

First, retrieve the first and last slots using the `.k-scheduler-body .k-scheduler-cell.k-slot-cell` class, where the first item in the array represents the first slot while the last one represents the last one. This allows you to get the date value of the `data-slot-start` of the first slot, and `data-slot-end` of the last slot. 

In the following demo, this is achieved in the `setRanges` method that is called in both the [mounted](https://vuejs.org/api/options-lifecycle.html#mounted) and [updated](https://vuejs.org/api/options-lifecycle.html#updated) lifecycle options. This is because we want to get the values when the component first mounts, and each time the date or view is changed by the user which triggers the `update` method.

{% meta id height:500 %}
{% embed_file scheduler-start-end-dates/main.vue preview %}
{% embed_file scheduler-start-end-dates/main.js preview %}
{% embed_file shared/events-utc.js %}
{% endmeta %}
