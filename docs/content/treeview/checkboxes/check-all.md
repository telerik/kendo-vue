---
title: Checking All Items
description: "Learn how to work with TreeView data and check all Kendo UI for Vue Native TreeView nodes at once in Vue projects."
slug: check_all_items_treeview
position: 4
---

# Checking All Items

While the TreeView does not provide a built-in feature for checking and unchecking all its items at once, the component supports such an implementation.

To enable the check-all mode for its items, set the `checked` field of each TreeView node to `true`. To enable the uncheck-all mode for its items, set the `checked` field of each TreeView node to a falsy value. You can further handle the checking and unchecking of all items depending on whether you [update the items directly](#toc-updating-items-directly) or [use the helper functions](#toc-using-helper-functions).

## Updating Items Directly

The following example demonstrates how to directly update the `checked` field of all TreeView items.



{% meta height:490 %}
{% embed_file checkbox/checkbox-all/main.vue preview %}
{% embed_file checkbox/checkbox-all/main.js %}
{% endmeta %}


## Using Helper Functions

The following example demonstrates how to use the [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %}) and [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper functions to prepare the [`dataItems`]({% slug api_treeview_treeviewprops %}#toc-dataitems) of the TreeView and how to manually set the [`check`]({% slug api_treeview_treeviewoperationdescriptors %}#toc-check) descriptor to:
* All hierarchical item indices upon checking all items.
* An empty array upon unchecking all items.

{% meta height:490 %}
{% embed_file checkbox/checkbox-all-helper/main.vue preview %}
{% embed_file checkbox/checkbox-all-helper/main.js %}
{% endmeta %}

## Suggested Links

* [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %})
* [`TreeViewCheckChangeSettings`]({% slug api_treeview_treeviewcheckchangesettings %})
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
* [`TreeViewCheckDescriptor`]({% slug api_treeview_treeviewcheckdescriptor %})
* [`onCheckChange`]({% slug api_treeview_treeviewcheckchangeevent %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
