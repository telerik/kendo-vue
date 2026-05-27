---
title: Selecting All Items
description: "Learn how to select all the Kendo UI for Vue Native TreeView items in Vue projects."
slug: select_all_treeview
position: 3
---

# Selecting All Items

While the TreeView does not provide a built-in feature for selecting and deselecting all its items at once, the component supports such an implementation.

To enable the select-all mode for its items, set the `selected` field of each TreeView node to `true`. To enable the deselect-all mode for its items, set the `selected` field of each TreeView node to a falsy value. You can further handle the selection and deselection of all items depending on the approach you chose for [updating the selected TreeView items]({% slug selection_ways_treeview %}).

The following example demonstrates how to use the [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper function and update the selected items in an immutable way.

{% meta height:520 %}
{% embed_file select/selection-all/main.vue preview %}
{% embed_file select/selection-all/main.js %}
{% endmeta %}


## Suggested Links

* [`onItemClick`]({% slug api_treeview_treeviewitemclickevent %})
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
