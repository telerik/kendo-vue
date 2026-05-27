---
title: Changing Position of Column Menu Icon in Kendo UI for Vue Grid
description: Learn how to change the position of the column menu icon in Kendo UI for Vue Grid from the right of the header text to the left.
type: how-to
page_title: How to Change Column Menu Icon Position in Kendo UI for Vue Grid
meta_title: How to Change Column Menu Icon Position in Kendo UI for Vue Grid
slug: grid-change-column-menu-icon-position
tags: grid,kendo ui for vue,column menu icon,header text,css
res_type: kb
ticketid: 1708753
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Kendo UI for Vue Grid</td>
</tr>
<tr>
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I want to change the position of the column menu icon in the [Kendo UI for Vue Grid](https://docs.telerik.com/kendo-ui-vue/components/grid/) from the right of the header text to the left. The component does not provide a built-in property for this functionality, so I need a way to accomplish it with custom CSS.

This knowledge base article also answers the following questions:
- How to move the column menu icon to the left side of the header text in Kendo UI for Vue Grid?
- Can I reposition the Kendo UI for Vue Grid column menu icon?
- How to achieve a custom layout for the column menu icon in Kendo UI for Vue Grid?

<demo metaUrl="knowledge-base/grid-change-column-menu-icon-position/" height="600"></demo>

## Solution

To move the column menu icon to the left of the header text, overwrite the built-in styles of the header using custom CSS. Follow these steps:

1. Add the following CSS rules to your application:

```css
/* Move the column menu icon to the left */
div.k-grid .k-grid-header .k-grid-filter,
div.k-grid .k-grid-header .k-header-column-menu,
div.k-grid .k-grid-header .k-grid-header-menu {
  left: 0;
}

/* Adjust the header text margin */
.k-grid .k-grid-md .k-table-th > .k-cell-inner,
.k-grid-md .k-table-th > .k-cell-inner {
  margin-inline: 8px;
}
```

2. Ensure the CSS is applied to the relevant elements within the grid header.

This approach modifies the default styling and makes the column menu icon appear on the left side of the header text.

## See Also

- [Kendo UI for Vue Grid Overview](https://docs.telerik.com/kendo-ui-vue/components/grid/)
- [Kendo UI for Vue Grid API Reference](https://docs.telerik.com/kendo-ui-vue/api/Grid)
- [Customizing Kendo UI Grid Appearance](https://docs.telerik.com/kendo-ui-vue/components/grid/customization/)
