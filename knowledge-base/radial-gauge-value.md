---
title: Display Value for the RadialGauge
description: An example of how to display the value in the Kendo UI for Vue Native RadialGauge.
type: how-to
page_title: Display Value for the RadialGauge - Kendo UI for Vue RadialGauge
slug: radial-gauge-value
tags: radialgauge, gauge, value
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

How can I show the value of the RadialGauge in the center?

## Solution

This can be achieved by rendering a custom label element with the value inside that is relatively positioned:

{% meta id height:500 %}
{% embed_file radial-gauge-value/main.vue preview %}
{% embed_file radial-gauge-value/main.js  %}
{% endmeta %}
