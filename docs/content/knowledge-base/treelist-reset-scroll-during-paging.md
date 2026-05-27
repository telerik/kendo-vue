---
title: Reset Scroll Position When Changing Pages in TreeList
description: Learn how to reset the scroll position to the top when navigating between pages in the Kendo UI for Vue TreeList.
type: how-to
page_title: Reset TreeList Scroll Position During Paging - Kendo UI for Vue TreeList
slug: treelist-reset-scroll-during-paging
tags: treelist, paging, scroll, scrolltop, pagination, kendovue
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
			<td>Progress® Kendo UI for Vue TreeList</td>
		</tr>
	</tbody>
</table>

## Description

When navigating between pages in the Kendo UI for Vue TreeList, the scroll position is not automatically reset. How can I reset the scroll position to the top when the page changes?

## Solution

Use the [`onPagechange`]({% slug api_treelist_treelistprops %}#toc-onpagechange) event to detect page changes and manually reset the scroll position of the TreeList container. Access the TreeList's scrollable container using a ref and set its `scrollTop` property to `0`.

<demo metaUrl="knowledge-base/treelist-reset-scroll-during-paging/" height="550"></demo>

## See Also

- [Kendo UI for Vue TreeList Documentation]({% slug overview_treelist %})
- [TreeList Paging]({% slug paging_treelist %})
- [TreeList API Reference]({% slug api_treelist_treelistprops %})
