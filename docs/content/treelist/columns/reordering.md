---
title: Reordering
description: "Get started with the Kendo UI for Vue Native TreeList which supports the reordering of columns by dragging the header cells."
slug: reordering_columns_treelist
position: 5
---

# Reordering

The Kendo UI for Vue Native TreeList allows you to reorder its columns by dragging its header cells.

To enable column reordering, set the [`reorderable`]({% slug api_treelist_treelistprops %}#toc-reorderable) property to `true` and update the TreeList [`columns`]({% slug api_treelist_treelistprops %}#toc-columns) collection using [`onColumnReorder`]({% slug api_treelist_treelistprops %}#toc-oncolumnreorder) event.

{% meta height:580 %}
{% embed_file reordering/main.vue preview %}
{% embed_file reordering/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the TreeList Column]({% slug api_treelist_treelistcolumnprops %})
* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
