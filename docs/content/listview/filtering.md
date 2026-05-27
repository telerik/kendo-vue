---
title: Filtering
description: "Get started with the filtering capabilities of the Kendo UI for Vue Native ListView and learn how to filter the data."
slug: filtering_listview
position: 60
---

# Filtering

The data of the Kendo UI for Vue Native ListView can be easily filtered depending on the requirements of each scenario. The ListView will display the data passed to its `data-items` property and it is up to you to decide how this data will be filtered. In this article you can see two filtering scenarios:
* [Data filtering using the Filter component](#toc-data-filtering-using-the-filter-component).
* [Data filtering using the data tools available in the Kendo UI for Vue Native suite](#toc-data-filtering-using-filterby).

## Data Filtering Using the Filter Component

The following example demonstrates a scenario in which the functionality of the `ListView` and [Kendo UI for Vue Native Filter]({% slug overview_filter %}) components is combined in a real-life example.

{% meta height:850 %}
{% embed_file filtering/main.vue preview %}
{% embed_file filtering/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

## Data Filtering Using FilterBy

The following example demonstrates the `ListView` data can be filtered using the [filterBy](slug:api_data-tools_filterby) method available in the `@progress/kendo-data-query` package.

{% meta height:670 %}
{% embed_file header-template/main.vue preview %}
{% embed_file header-template/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}


## Suggested Links

* [API Reference of the ListView]({% slug api_listview_listviewprops %})
