---
title: Data Binding
page_title: Data Binding - TreeList - Kendo UI for Vue
description: "Bind the Kendo UI TreeList wrapper for Vue to local data arrays or remote data services."
slug: databinding_treelist_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/treelist/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/treelist"></WrapperBanner></div> 

# Data Binding

The TreeList provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

The following example demonstrates how to create a TreeList and bind it to a local data source.

{% meta height:260 %}
{% embed_file data-binding/local/main.vue preview %}
{% embed_file data-binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

You can bind the TreeList to a remote dataset by either:

* [Using the TreeListDataSource component](#toc-using-the-treelistdatasource-component), or
* [Using the `data` method](#toc-using-the-data-method).

### Using the TreeListDataSource Component

The following example demonstrates how to bind the TreeList to a remote [TreeListDataSource component]({% slug overview_treelistdatasource %}).

{% meta height:260 %}
{% embed_file data-binding/remote/main.vue preview %}
{% embed_file data-binding/remote/main.js %}
{% endmeta %}

### Using the data Method

The following example demonstrates how to bind the TreeList to remote data by using the `data` method.

{% meta height:260 %}
{% embed_file data-binding/data-method/main.vue preview %}
{% embed_file data-binding/data-method/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI TreeListDataSource Component for Vue]({% slug overview_treelistdatasource %})
* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/treelist/overview)
* [API Reference of the TreeList Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist)
