---
title: Overriding Default No Records Component in Kendo UI for Vue Grid
description: Learn how to override the default "No records available" text in the Kendo UI for Vue Grid by using the `GridNoRecords` component.
type: how-to
page_title: How to Customize No Records Component in Kendo UI for Vue Grid
meta_title: How to Customize No Records Component in Kendo UI for Vue Grid
slug: grid-customize-no-records-component
tags: kendo ui for vue, grid, gridnorecords, no records, customize
res_type: kb
ticketid: 1697172
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> Kendo UI for Vue Grid </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I want to replace the default "No records available" message in the [Kendo UI for Vue Grid](https://www.telerik.com/kendo-vue-ui/components/grid/overview/) with my own Vue component. By default, when the grid has no data, it displays this text. I need the ability to customize this behavior.

This knowledge base article also answers the following questions:
- How do I replace the default message in the Kendo UI for Vue Grid when no records are present?
- Is there a way to use a Vue component for the "No records" message in Kendo UI for Vue Grid?
- How can I customize the no records rendering in Kendo UI for Vue Grid?

## Solution

To override the default "No records available" text in the Kendo UI for Vue Grid, use the `GridNoRecords` component within the grid. Define the custom content or Vue component you want to display when no records are available.

### Steps

1. Use the `GridNoRecords` component inside the `Grid` component.
2. Place your custom message or component as the content of `GridNoRecords`.

{% meta height:380 %}
{% embed_file grid-customize-no-records-component/main.vue preview %}
{% embed_file grid-customize-no-records-component/main.js %}
{% endmeta %}

## See Also

- [Kendo UI for Vue Grid Documentation](https://www.telerik.com/kendo-vue-ui/components/grid/overview/)
- [GridNoRecords Component API](https://www.telerik.com/kendo-vue-ui/components/grid/api/gridnorecordsprops)
- [Customizing Kendo UI for Vue Grid](https://www.telerik.com/kendo-vue-ui/components/grid/)
