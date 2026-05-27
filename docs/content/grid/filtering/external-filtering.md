---
title: External Filtering
page_title: Vue Grid - Data Filtering using external components and tools - Kendo UI Native Grid
description: "Get started with the Kendo UI for Vue Native Grid data filtering with external components."
slug: filter_external_grid
position: 4
---

# External Filtering

The Kendo UI for Vue Native Grid data can be filtered using the [Filter]({% slug overview_filter %}) component or other external tool.

To filter the data, use the [`filterBy`]({% slug api_kendo-data-query_filterby %}) method from the `kendo-data-query` utility package. It accepts two parameters:

* The array to be filtered.
* The filters to be applied, passed as a [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}) object.

## Using the Filter component

The [`Filter`]({% slug overview_filter %}) component has an UI that is suitable for external filtering. It allows the user to enter the desired filter and constructs the ready-to-use [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}) filter expression as a value.

{% meta height:910 %}
{% embed_file filtering/external/main.vue preview %}
{% embed_file filtering/external/main.js %}
{% embed_file filtering/external/products.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
