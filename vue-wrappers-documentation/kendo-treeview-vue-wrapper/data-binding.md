---
title: Data Binding
page_title: Data Binding - TreeView - Kendo UI for Vue
description: "Bind the Kendo UI TreeView wrapper for Vue to local data arrays or remote data services."
slug: databinding_treeview_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/treeview/data-binding/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/treeview/data-binding/"></WrapperBanner></div>    

# Data Binding

The TreeView provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

The TreeView enables you to bind it to:
* [Simple local data](#toc-simple-local-data-binding)
* [Complex local data](#toc-complex-local-data-binding)

### Simple Local Data Binding

The following example demonstrates how to create and bind the TreeView to a simple local data source.

{% meta height:450 %}
{% embed_file data-binding/local-simple/main.vue preview %}
{% embed_file data-binding/local-simple/main.js %}
{% endmeta %}

### Complex Local Data Binding

The following example demonstrates how to create and bind the TreeView to a complex local data source.

{% meta height:450 %}
{% embed_file data-binding/local-complex/main.vue preview %}
{% embed_file data-binding/local-complex/main.js %}
{% endmeta %}

## Binding to Remote Data Services

You can bind the TreeView to a remote dataset by either:
* [Using the HierarchicalDataSource component](#toc-using-the-hierarchicaldatasource-component), or
* [Using the `data` method](#toc-using-the-data-method).

### Using the HierarchicalDataSource Component

The following example demonstrates how to bind the TreeView to a [HierarchicalDataSource component]({% slug overview_hierarchicaldatasource %}).

{% meta height:450 %}
{% embed_file data-binding/remote/main.vue preview %}
{% embed_file data-binding/remote/main.js %}
{% endmeta %}


### Using the data Method

The following example demonstrates how to bind the TreeView to remote data by using the `data` method.

{% meta height:450 %}
{% embed_file data-binding/data-method/main.vue preview %}
{% embed_file data-binding/data-method/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI HierarchicalDataSource Component for Vue]({% slug overview_hierarchicaldatasource %})
* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI TreeView for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/treeview/overview)
* [API Reference of the TreeView Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview)
