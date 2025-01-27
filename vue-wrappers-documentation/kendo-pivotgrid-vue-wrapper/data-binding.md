---
title: Data Binding
page_title: Data Binding - PivotGrid - Kendo UI for Vue
description: "Bind the Kendo UI PivotGrid wrapper for Vue to local data arrays or remote data services."
slug: databinding_pivotgrid
position: 1
---

<div><WrapperBanner></WrapperBanner></div>

# Data Binding

The ListView provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) or [remote OLAP data services](#toc-binding-to-remote-olap-data-services).

## Binding to Local Data Arrays

You can bind the PivotGrid a flat data array on the client. As a result, it processes the data on the client and creates a client cube representation.

To populate the PivotGrid with local data:

1. Define the array in the `data` object of the Vue application.
1. Refer the `data` object during the initialization of the PivotGrid through the `:data` prop of the PivotDataSource.

{% meta height:660 %}
{% embed_file binding/local/main.vue preview %}
{% embed_file binding/local/main.js %}
{% endmeta %}

## Binding to Remote OLAP Data Services

The following example demonstrates how to bind the PivotGrid to a remote OData OLAP service.

{% meta height:660 %}
{% embed_file binding/remote/main.vue preview %}
{% embed_file binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI PivotGrid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/pivotgrid/overview)
* [API Reference of the PivotGrid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid)
