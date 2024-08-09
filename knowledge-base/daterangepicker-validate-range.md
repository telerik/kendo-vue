---
title: Show invalid state for DateRangePicker if start date is after end date
description: An example on how to validate the DateRangePicker based on the start and end dates
type: how-to
page_title: Set Invalid State If Start Date Is After End Date - Kendo UI for Vue DateRangePicker
slug: daterangepicker-validate-range
tags: daterangepicker, validation, range, invalid
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>5.1.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue</td>
	    </tr>
    </tbody>
</table>


## Description
I want to set the DateRangePicker to invalid state or show error message if the start date is after the end date.


## Solution
Set the "valid" property of the DateRangePicker to a state variable that can be changed to "true" or "false" within the `onChange` event of the DateRangePicker based on the "start" and "end" values.

### Runnable example
{% meta height:500 %}
{% embed_file donut-chart-multiple-series-different-label-colors/main.vue preview %}
{% embed_file donut-chart-multiple-series-different-label-colors/main.js %}
{% embed_file donut-chart-multiple-series-different-label-colors/donut-series-data.json %}
{% endmeta %}
