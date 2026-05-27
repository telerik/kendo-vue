---
title: Updating Expanded Items
description: "Learn how to work with TreeView data and update the expandable TreeView nodes by using the available approaches supported by the Kendo UI for Vue Native TreeView in Vue projects."
slug: expansion_ways_treeview
position: 2
---

# Updating Expanded Items

The Kendo UI for Vue Native TreeView provides specific approaches for working with its data and updating the `expanded` field.

The available options are:
* [Mutating the items directly](#toc-mutating-the-items-directly)
* [Using a helper function](#toc-using-a-helper-function)

## Mutating the Items Directly

The following example demonstrates how to directly update the TreeView items.

{% meta height:400 %}
{% embed_file expand/items-expanded-directly/main.vue preview %}
{% embed_file expand/items-expanded-directly/main.js %}
{% endmeta %}

## Using a Helper Function

The [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper function updates the items in an immutable way, that is, works with a copy of the data. While using `processTreeViewItems` is similar to creating a copy of the data before each item update, the `data` field of the application state does not change. That is why, the helper function approach is useful when other components depend on the `data` field.

The following example demonstrates how to introduce an additional state field (`expand`) which holds the IDs of the expanded items and is passed to [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) on each re-render.

{% meta height:400 %}
{% embed_file expand/items-expanded-helper-function/main.vue preview %}
{% embed_file expand/items-expanded-helper-function/main.js %}
{% endmeta %}

### Using a Helper Function with Custom Data Items

When working with custom data items in a Helper function scenario, in addition to the default configuration, we have to define values for the [textField]({% slug api_treeview_treeviewprops %}#toc-textfield) and [childrenField]({% slug api_treeview_treeviewprops %}#toc-childrenfield) properties 

{% meta height:400 %}
{% embed_file expand/custom-items-expanded-helper-function/main.vue preview %}
{% embed_file expand/custom-items-expanded-helper-function/main.js %}
{% endmeta %}
## Suggested Links

* [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
