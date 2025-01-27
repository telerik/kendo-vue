---
title: Data Binding
page_title: Data Binding - Chart - Kendo UI for Vue
description: "Bind the Kendo UI Chart wrapper for Vue to local data arrays, remote data services, or grouped data."
slug: databinding_chart_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/data-binding/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/data-binding"></WrapperBanner></div>

# Data Binding

The Chart populates its data through binding to [local](#toc-binding-to-local-data-arrays), [remote](#toc-binding-to-remote-data-services), and [grouped](#toc-binding-to-grouped-data) data.

## Binding to Local Data Arrays

The Chart provides built-in data binding capabilities for displaying data from a local data storage through the `data-source` property of the Chart.

{% meta height:460 %}
{% embed_file chart/data-binding/local/main.vue preview %}
{% embed_file chart/data-binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize and populate the Chart with data by binding it to a remote data service:

1. Specify a remote endpoint or web service (REST) which returns data in a JSON/JSONP format.
1. Utilize the [Kendo UI Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview) between the Chart and the underlying data.

To make the connection to the remote endpoint and process the data properly, the DataSource requires the following information:

* URLs of the web service.
* Request type.
* Response data type.
* Structure (schema) of the response (if more complex than a plain array of objects).

{% meta height:460 %}
{% embed_file chart/data-binding/remote/main.vue preview %}
{% embed_file chart/data-binding/remote/main.js %}
{% endmeta %}

## Binding to Grouped Data

You can also bind the Chart to grouped data by using the Kendo UI Data Source as a mediator.

{% meta height:460 %}
{% embed_file chart/data-binding/grouped-data/main.vue preview %}
{% embed_file chart/data-binding/grouped-data/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source Component](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
