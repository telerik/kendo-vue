---
title: Change the Expand/Collapse Arrow in Master-Detail Grid
description: Learn how to customize the expand/collapse arrow icons in the Kendo UI for Vue Master-Detail Grid hierarchy column.
type: how-to
page_title: Customize Master-Detail Grid Expand/Collapse Icons - Kendo UI for Vue Data Grid
slug: grid-change-expand-collapse-arrow
tags: grid, master-detail, hierarchy, custom, icon, expand, collapse, arrow, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.0.2</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® Kendo UI for Vue Data Grid</td>
		</tr>
	</tbody>
</table>

## Description

How can I customize the expand/collapse arrow icons in the Kendo UI for Vue Master-Detail Grid? I want to replace the default arrows with custom icons or components when displaying master-detail grids.

## Solution

To customize the expand/collapse arrows, use a named template slot for the expand column cell. Set the `cell` property in the [`expandColumn`]({% slug api_grid_gridprops %}#toc-expandcolumn) Grid prop to reference your custom template slot name, then define that template slot to render your custom icons or components.

<demo metaUrl="knowledge-base/grid-change-expand-collapse-arrow/" height="500"></demo>

## See Also

- [Kendo UI for Vue Grid Documentation]({% slug overview_grid %})
- [Grid Master-Detail Template]({% slug detailrow_grid %})
- [Grid Column Props API]({% slug api_grid_gridcolumnprops %})
