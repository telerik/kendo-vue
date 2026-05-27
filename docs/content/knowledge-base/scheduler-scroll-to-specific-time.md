---
title: How to scroll to a specific time in the Kendo UI Vue Native Scheduler
description: An example of how to scroll to a specific time in the Kendo UI Vue Native Scheduler
type: how-to
page_title: How to scroll to a specific time - KKendo UI Vue Native Scheduler
slug: scheduler-scroll-to-specific-time
tags: scheduler, scroll
ticketid: 1677269
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>6.1.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I programmatically scroll to a specific time in the Kendo UI Vue Native Scheduler?

## Solution

This can be achieved by obtaining the `.k-scheduler-layout` container and programmatically scrolling to the desired hour:

{% meta height:460 %}
{% embed_file scheduler-scroll-to-specific-time/main.vue preview %}
{% embed_file scheduler-scroll-to-specific-time/main.js %}
{% embed_file scheduler-scroll-to-specific-time/events-utc.js %}
{% endmeta %}

