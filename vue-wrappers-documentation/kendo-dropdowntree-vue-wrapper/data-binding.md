---
title: Data Binding
page_title: Data Binding - DropDownTree - Kendo UI for Vue
description: "Bind the Kendo UI DropDownTree wrapper for Vue to local data arrays or remote data services."
slug: databinding_dropdowntree_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdowntree/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdowntree"></WrapperBanner></div>

# Data Bindingng

The DropDownTree provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

The DropDownTree enables you to bind it to:
* [Simple local data](#toc-simple-local-data-binding)
* [Complex local data](#toc-complex-local-data-binding)

### Simple Local Data Binding

The following example demonstrates how to create and bind the DropDownTree to a simple local data source.

{% meta height:750 %}
{% embed_file data-binding/local-simple/main.vue preview %}
{% embed_file data-binding/local-simple/main.js %}
{% endmeta %}


### Complex Local Data Binding

The following example demonstrates how to create and bind the DropDownTree to a complex local data source.

{% meta height:750 %}
{% embed_file data-binding/local-complex/main.vue preview %}
{% embed_file data-binding/local-complex/main.js %}
{% endmeta %}


## Binding to Remote Data Services

You can bind the DropDownTree to a remote dataset by:
* [Defining an inner HierarchicalDataSource for the DropDownTree](#toc-defining-inner-hierarchicaldatasource)
* [Using an external HierarchicalDataSource component](#toc-using-the-hierarchicaldatasource-component)
* [Using the `data` method](#toc-using-the-data-method)

### Defining Inner HierarchicalDataSource

The following example demonstrates how to define an inner [HierarchicalDataSource component]({% slug overview_hierarchicaldatasource %}) for the DropDownTree.

{% meta height:750 %}
{% embed_file data-binding/inner-hierarchical/main.vue preview %}
{% embed_file data-binding/inner-hierarchical/main.js %}
{% endmeta %}

### Using the HierarchicalDataSource Component

The following example demonstrates how to bind the DropDownTree to an external [HierarchicalDataSource component]({% slug overview_hierarchicaldatasource %}).

{% meta height:750 %}
{% embed_file data-binding/datasource-component/main.vue preview %}
{% embed_file data-binding/datasource-component/main.js %}
{% endmeta %}

### Using the data Method

The following example demonstrates how to bind the DropDownTree to remote DataSource that is initialized in the `data` method.

{% meta height:750 %}
{% embed_file data-binding/data-method/main.vue preview %}
{% embed_file data-binding/data-method/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI HierarchicalDataSource for Vue]({% slug overview_hierarchicaldatasource %})
* [Kendo UI DataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI DropDownTree for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdowntree/overview)
* [API Reference of the DropDownTree Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree)
