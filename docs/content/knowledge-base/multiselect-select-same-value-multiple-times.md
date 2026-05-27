---
title: How to select one value from the MultiSelect multiple times
description: An example on how to select one value from the Kendo UI for Vue MultiSelect multiple times
type: how-to
page_title: Select one value from the MultiSelect multiple times - Kendo UI for Vue MultiSelect
slug: multiselect-select-same-value-multiple-times
tags: multiselect, kendovue, value, same
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
			<td>Progress® Kendo UI for Vue MultiSelect</td>
		</tr>
	</tbody>
</table>

## Description

I want to be able to select one value from the MultiSelect popup multiple times and display it in the selected values as many times as it was selected. I want to be able to remove only one instance of them at a time.

## Solution

The MultiSelect is designed to select each value only one time, but by utilizing the [`change`]({% slug api_dropdowns_multiselectprops %}#toc-onchange) event and using the `nativeEvent` target that triggered the event could allow you to change the selection as per the requirement.
This is an example showcasing this in action:

{% meta height:350 %}
{% embed_file multiselect-select-same-value-multiple-times/main.vue preview %}
{% embed_file multiselect-select-same-value-multiple-times/main.js %}
{% endmeta %}
