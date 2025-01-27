---
title: HierarchicalDataSource
page_title: HierarchicalDataSource Overview - Components - Kendo UI for Vue
description: "Use the Kendo UI HierarchicalDataSource wrapper component in Vue projects."
slug: overview_hierarchicaldatasource
position: 4
---

<div><WrapperBanner></WrapperBanner></div>

# HierarchicalDataSource Overview

The HierarchicalDataSource extends the [DataSource component]({% slug overview_datasource %}).

It enables you to represent the data within the Kendo UI components in a hierarchical order.

Currently, the Kendo UI TreeView and PanelBar support the hierarchical Data Source. However, you can share the root level of the hierarchy with any DataSource-enabled component because the HierarchicalDataSource inherits from the DataSource.

The following example demonstrates how to bind a TreeView to the HierarchicalDataSource, display a two-level hierarchy of items, and bind a Grid to the same HierarchicalDataSource which displays the root level of items.

{% meta height:660 %}
{% embed_file hierarchical-datasource/main.vue preview %}
{% embed_file hierarchical-datasource/main.js %}
{% endmeta %}


## Suggested Links

* [Kendo UI Data Source for jQuery](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [API Reference of the Data Source Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [API Reference of the HierarchicalDataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource)
