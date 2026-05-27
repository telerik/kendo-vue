---
title: Implementing Root-Level Row Reordering in Kendo UI for Vue TreeList
description: Learn how to implement root-level row reordering functionality in the Kendo UI for Vue TreeList component.
type: how-to
page_title: How to Enable Row Reordering for Root-Level Items in Vue TreeList
meta_title: How to Enable Row Reordering for Root-Level Items in Vue TreeList
slug: treelist-root-level-row-reordering
tags: treelist, vue, row-reorder, root-level, drag-and-drop
res_type: kb
ticketid: 1711843
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Kendo UI for Vue TreeList </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

The Kendo UI for Vue [TreeList](https://www.telerik.com/kendo-vue-ui/components/treelist/overview/) currently does not support built-in functionality for root-level row reordering. However, similar to the "row reorder" feature in the Grid component, you can achieve this functionality for the TreeList by implementing a custom solution. This approach allows you to reorder only the root-level items while leaving child items unaffected.

This knowledge base article also answers the following questions:
- How to reorder root-level rows in Kendo UI for Vue TreeList?
- Is it possible to enable drag-and-drop sorting in Vue TreeList?
- Can I reorder rows in Vue TreeList like the Grid component?

## Solution

To implement root-level row reordering in the Kendo UI for Vue TreeList, follow these steps:

1. Add a drag-and-drop mechanism to the TreeList to reorder root-level rows.
2. Update the underlying data source to reflect the new order.

Here is an example of how to achieve this:

<demo metaUrl="knowledge-base/treelist-root-level-row-reordering/" height="600"></demo>

## See Also

- [Kendo UI for Vue TreeList Documentation](https://www.telerik.com/kendo-vue-ui/components/treelist/overview/)
- [Kendo UI for Vue TreeList Drag-and-Drop](https://www.telerik.com/kendo-vue-ui/components/treelist/rows/drag-drop/)
- [Kendo UI for Vue Grid Row Reordering](https://www.telerik.com/kendo-vue-ui/components/grid/rows/row-reorder/)
