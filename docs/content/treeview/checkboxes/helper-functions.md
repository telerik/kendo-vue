---
title: Using Helper Functions
description: "Learn how to check the Kendo UI for Vue Native TreeView nodes by using check helper functions in Vue projects."
slug: check_helper_funcs_treeview
position: 3
---

# Using Helper Functions

The TreeView enables you to update parent and child nodes as well as items in an indeterminate state by using helper functions.

## Setup

To implement such use case scenarios, use the following helper functions:
* [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %})&mdash;Provides the ids of the checked TreeView items. Allows you to automatically check parent and child nodes, and to configure a single or multiple selection mode. For more information, refer to [`TreeViewCheckChangeSettings`]({% slug api_treeview_treeviewcheckchangesettings %}).
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})&mdash;Based on the provided ids of the checked TreeView items, updates the data in an immutable way. Enables you to configure the application of an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) to the items.



{% meta height:750 %}
{% embed_file checkbox/checkbox-helper/main.vue preview %}
{% embed_file checkbox/checkbox-helper/main.js %}
{% endmeta %}


## Customizing Single Item Checking

By default, [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %}) and [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) work with hierarchical item indices. Alternatively, you can use a custom item field which uniquely describes the item (for example, an **ID** column from a database) by setting the [`idField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-idfield) of the TreeViewCheckDescriptor to the name of the custom field.

By default, a TreeView item is in an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) when its `checkIndeterminate` field is set to `true`. Also, the application of an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) to TreeView items is decoupled from the selection mode (single or multiple).

To enable the application of an indeterminate state, use the [`applyCheckIndeterminate`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-applycheckindeterminate) field of the TreeViewCheckDescriptor. To use a custom item field instead of the `checkIndeterminate` field:

1. Set the [`checkIndeterminateField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-applycheckindeterminate) field of the TreeViewCheckDescriptor to the name of the custom field.
1. Set the [`checkIndeterminateField`]({% slug api_treeview_treeviewprops %}#toc-checkindeterminatefield) property of the TreeView to the name of the custom field.

{% meta height:450 %}
{% embed_file checkbox/checkbox-helper-single/main.vue preview %}
{% embed_file checkbox/checkbox-helper-single/main.js %}
{% endmeta %}

## Customizing Multiple Item Checking

By default, [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %}) and [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) work with hierarchical item indices. Alternatively, you can use a custom item field which uniquely describes the item (for example, an **ID** column from a database) by setting the [`idField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-idfield) of the TreeViewCheckDescriptor to the name of the custom field.

By default, a TreeView item is checked when its `checked` field is set to `true`. To use a custom item field instead of the `checked` field:

1. Set the [`operationField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-operationfield) field of the TreeViewCheckDescriptor to the name of the custom field.
1. Set the [`checkField`]({% slug api_treeview_treeviewprops %}#toc-checkfield) property of the TreeView to the name of the custom field.

{% meta height:450 %}
{% embed_file checkbox/checkbox-helper-multiple/main.vue preview %}
{% embed_file checkbox/checkbox-helper-multiple/main.js %}
{% endmeta %}

## Suggested Links

* [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %})
* [`TreeViewCheckChangeSettings`]({% slug api_treeview_treeviewcheckchangesettings %})
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
* [`TreeViewCheckDescriptor`]({% slug api_treeview_treeviewcheckdescriptor %})
* [`onCheckChange`]({% slug api_treeview_treeviewcheckchangeevent %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
