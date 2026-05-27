---
title: Data Binding
description: "Use the Kendo UI for Vue TreeView item fields to bind the component to data and load remote TreeView data on demand in Vue projects."
slug: databinding_treeview
position: 2
---

# Data Binding

The Kendo UI for Vue TreeView enables you to work with various types of data.

## Basics

To bind the TreeView to data:

1. Add children items to an item with an `items` field.
1. Configure the [`dataItems`]({% slug api_treeview_treeviewprops %}#toc-dataitems) property.



{% meta height:380 %}
{% embed_file data-binding/basic/main.vue preview %}
{% embed_file data-binding/basic/main.js %}
{% endmeta %}


## Item Fields

By default, the TreeView provides the following fields for its items:
* [`text`]({% slug api_treeview_treeviewprops %}#toc-textfield)&mdash;The string representation of the item.
* `items`&mdash;The children of the item.
* [`expanded`]({% slug api_treeview_treeviewprops %}#toc-expandfield)&mdash;If set to `true`, expands the item.
* [`selected`]({% slug api_treeview_treeviewprops %}#toc-selectfield)&mdash;If set to `true`, selects the item.
* [`disabled`]({% slug api_treeview_treeviewprops %}#toc-disablefield)&mdash;If set to `true`, disables the item.
* [`checked`]({% slug api_treeview_treeviewprops %}#toc-checkfield)&mdash;If set to `true`, checks the item.
* [`checkIndeterminate`]({% slug api_treeview_treeviewprops %}#toc-checkindeterminatefield)&mdash;If set to `true`, applies an indeterminate check to the item.
* [`hasChildren`]({% slug api_treeview_treeviewprops %}#toc-haschildrenfield)&mdash;If set to `true`, notifies the TreeView that the item has children even if they are not initially passed. Used for implementing the load-on-demand feature.

Apart form `items`, you can replace each of the default TreeView fields with custom ones. To include your own fields, set the corresponding TreeView property to the name of the custom field. The TreeView also supports the nesting of its item fields.

{% meta height:350 %}
{% embed_file data-binding/item-fields/main.vue preview %}
{% embed_file data-binding/item-fields/main.js %}
{% endmeta %}

## Loading Data on Demand

The following example demonstrates how to fetch remote data and bind the TreeView to it.

To implement the load-on-demand feature:

1. Set the `hasChildren` field of the root items.
1. Provide their children afterwards.

{% meta height:550 %}
{% embed_file data-binding/remote-data/main.vue preview %}
{% embed_file data-binding/remote-data/main.js %}
{% endmeta %}

## Suggested Links

* [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
