---
title: Disabling Specific Options in Kendo UI for Vue RadioGroup
description: Learn how to disable specific options in Kendo UI for Vue RadioGroup by setting the "disabled" property for individual items in the data array.
type: how-to
page_title: How to Disable Individual Items in Kendo UI for Vue RadioGroup
meta_title: How to Disable Individual Items in Kendo UI for Vue RadioGroup
slug: radiogroup-disable-specific-options
tags: vue, radiogroup, disabled, radiobuttonprops, kendovue
res_type: kb
ticketid: 1698894
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
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to disable specific options, not all, in the [Kendo UI for Vue RadioGroup]({% slug overview_radiogroup %}). The default documentation discusses disabling the entire RadioGroup, but it does not cover how to disable individual items.

This knowledge base article also answers the following questions:

-   How do I make certain items in a RadioGroup non-selectable?
-   Is it possible to disable specific radio options in Kendo UI for Vue?
-   How can I programmatically disable radio buttons in Kendo UI for Vue RadioGroup?

## Solution

To disable specific options in the Kendo UI for Vue RadioGroup, define the `data-items` array passed to the RadioGroup component. Each item in the `data-items` array is an object that can include the `disabled` property. Set the `disabled` property to `true` for the items that need to be disabled.

{% meta height:270 %}
{% embed_file radiogroup-disable-specific-options/main.vue preview %}
{% embed_file radiogroup-disable-specific-options/main.js %}
{% endmeta %}

### Key Points:

1. The `data-items` property of the RadioGroup accepts an array of items.
2. Each item can include the `disabled` property to disable specific options.

## See Also

-   [Kendo UI for Vue RadioGroup Overview]({% slug overview_radiogroup %})
-   [RadioGroup API]({% slug api_inputs_radiogroupprops %})
