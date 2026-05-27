---
title: Showing Loading State When Expanding Nodes in Kendo UI for Vue TreeView
description: Learn how to display a loading spinner when expanding nodes and loading data in Kendo UI for Vue TreeView.
type: how-to
page_title: Vue TreeView Loading Spinner on Node Expansion
meta_title: Vue TreeView Loading Spinner on Node Expansion
slug: treeview-loading-spinner-expanding-node
tags: treeview, vue, kendo ui, loading spinner, expanding node
res_type: kb
ticketid: 1697334
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Kendo UI for Vue TreeView</td>
</tr>
<tr>
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I need to show a loading spinner when a node in the [Kendo UI for Vue TreeView](https://www.telerik.com/kendo-vue-ui/components/treeview/) is expanding and data is being loaded from the server.

This knowledge base article also answers the following questions:
- How to add a loading spinner in Vue TreeView when expanding nodes?
- How to show a loading indicator for server requests in TreeView?
- How to implement a custom loading state in Kendo UI for Vue TreeView?

## Solution

To achieve this, track a loading state for each node and dynamically render a `<Loader />` component in place of the expand/collapse arrow when the loading flag is active.

Follow these steps:

1. Create a data structure to store the loading state for each node.
2. Update the loading state when starting and completing the server request.
3. Render a `<Loader />` component conditionally for nodes that are loading.

### Key Details
1. Use the `onExpand` event handler to manage the loading state.
2. Use the `itemRender` method to customize the rendering of nodes.
3. Replace the expand/collapse icon with the `<Loader />` component when `loading` is true.

### Runnable example
{% meta height:620 %}
{% embed_file treeview-loading-spinner-expanding-node/main.vue preview %}
{% embed_file treeview-loading-spinner-expanding-node/main.js %}
{% endmeta %}


## See Also

- [Kendo UI for Vue TreeView Documentation](https://www.telerik.com/kendo-vue-ui/components/treeview/)
- [Kendo UI for Vue Loader Documentation](https://www.telerik.com/kendo-vue-ui/components/indicators/loader/)
- [TreeView Expand Event API Reference](https://www.telerik.com/kendo-vue-ui/components/treeview/api/TreeView/#toc-onexpand)

