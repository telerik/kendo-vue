---
title: Scatter
page_title: Scatter Series Type - Chart - Kendo UI for Vue
description: "Basic usage of the Kendo UI Scatter Charts in Vue projects."
slug: scatterline_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/scatter/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/scatter"></WrapperBanner></div>

# Scatter

The Scatter charts show data as points defined by the values of their items.

Scatter charts are useful for displaying the relation between different sets of data, such as scientific experimental results, and plotting two-dimensional data.

## Basic Usage

The following example demonstrates the Scatter chart in action.

{% meta height:460 %}
{% embed_file series-types/scatter/basic-usage/main.vue preview %}
{% embed_file series-types/scatter/basic-usage/main.js %}
{% endmeta %}

## Sub-Types

The Scatter Charts feature the following sub-types:

* [Scatter Line Chart](#toc-scatter-line-chart)
* [Smooth Scatter Line](#toc-smooth-scatter-line)

### Scatter Line Chart

The Scatter line chart is useful for displaying numerical data. You can define the Scatter line series through the `:series-defaults-type="'scatterLine'"` prop.

{% meta height:460 %}
{% embed_file series-types/scatter/line/main.vue preview %}
{% embed_file series-types/scatter/line/main.js %}
{% endmeta %}

### Smooth ScatterLine

The smooth Scatter line chart displays the series items as connected with a fitted curve which represents a rough approximation of the missing data points.

You can define the Scatter line series through the `:series-defaults-style="'smooth'"` prop.

{% meta height:460 %}
{% embed_file series-types/scatter/smooth/main.vue preview %}
{% embed_file series-types/scatter/smooth/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
