---
title: Updating Selected Items
description: "Learn how to work with TreeView data and update the selectable TreeView nodes by using the available approaches supported by the Kendo UI for Vue Native TreeView in Vue projects."
slug: selection_ways_treeview
position: 2
---

# Updating Selected Items

The TreeView provides specific approaches for working with its data and updating the `selected` field.

The available options are:
* [Mutating the items directly](#toc-mutating-the-items-directly)
* [Using a helper function](#toc-using-a-helper-function)

## Mutating the Items Directly

The following example demonstrates how to directly update the selected items in a TreeView with single selection.

{% meta height:380 %}
{% embed_file select/selection-update/main.vue preview %}
{% embed_file select/selection-update/main.js %}
{% endmeta %}

## Using a Helper Function

The [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper function updates the items in an immutable way, that is, works with a copy of the data. While using `processTreeViewItems` is similar to creating a copy of the data before each item update, the `data` field of the application state does not change. That is why, the helper function approach is useful when other components depend on the `data` field.

The following example demonstrates how to introduce an additional state field (`select`) which holds the IDs of the selected items and is passed to [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) on each re-render.

{% meta height:350 %}
{% embed_file select/selection-update-helper-function/main.vue preview %}
{% embed_file select/selection-update-helper-function/main.js %}
{% endmeta %}

## Suggested Links

* [`onItemClick`]({% slug api_treeview_treeviewitemclickevent %})
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
* [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
