---
title: Line
page_title: Line Series Type - Chart - Kendo UI for Vue
description: "Basic usage of the Kendo UI Line Charts in Vue projects."
slug: line_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/line/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/line"></WrapperBanner></div>

# Line

Line charts are categorical charts which display continuous data as lines that pass through points defined by the values of their items.

## Basic Usage

The following example demonstrates the Line chart in action.

{% meta height:460 %}
{% embed_file series-types/line/basic-usage/main.vue preview %}
{% embed_file series-types/line/basic-usage/main.js %}
{% endmeta %}

## Data Binding

You can bind the Line series to an array that contains:

* Numbers.
* Arrays which represent `[value, category]` tuples.
* Objects which are also referred to as models.

For more information on how to configure each data-binding mode, refer to the article on [binding the Kendo UI Chart to data]({% slug databinding_chart_charts_wrapper %}).

## Sub-Types

The Line Charts feature the following sub-types:

* [Stacked Line Charts](#toc-stacked-line-charts)
* [100% Stacked Line Charts](#toc-100-stacked-line-charts)
* [Stepped Line Charts](#toc-stepped-line-charts)
* [Smooth Line Charts](#toc-smooth-line-charts)

### Stacked Line Charts

Stacked Line charts are suitable for indicating the proportion of individual values to the total. To select this series sub-type, set `series-defaults-stack` to `true`. You can also divide the Line chart series in two parts, by setting `missingValues` to `gap` and having `null` data-value entries in the series data which will be used as a divider. For more information, refer to the [`SeriesDefaults`](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/seriesdefaults) option.

{% meta height:460 %}
{% embed_file series-types/line/stacked/main.vue preview %}
{% embed_file series-types/line/stacked/main.js %}
{% endmeta %}

### 100% Stacked Line Charts

100% stacked Line charts are suitable for indicating the proportion of individual values as a percentage of the total. To select this series sub-type, set `series-defaults-stack-type`.

> While it is possible to plot negative values in a 100% Stacked Chart, the results are hard for the user to interpret.

{% meta height:460 %}
{% embed_file series-types/line/100-stacked/main.vue preview %}
{% embed_file series-types/line/100-stacked/main.js %}
{% endmeta %}

### Stepped Line Charts

The stepped Line chart is a form of Line chart where each data point from the series is connected with vertical and horizontal lines to form a step-like progression. This type of line visualization is useful for highlighting the increase or decrease in values over time. To configure the stepped Line chart, set the `k-style` setting of the `series`.

{% meta height:460 %}
{% embed_file series-types/line/stepped/main.vue preview %}
{% embed_file series-types/line/stepped/main.js %}
{% endmeta %}

### Smooth Line Charts

In the smooth Line chart each data point from the series is connected with a curved line which represents a rough approximation of the missing data points. To configure the smooth Line chart, set the `k-style` configuration of the `series`.

{% meta height:460 %}
{% embed_file series-types/line/smooth/main.vue preview %}
{% embed_file series-types/line/smooth/main.js %}
{% endmeta %}

## Functionality and Features

The Line charts provide options for setting their notes.

### Notes

The following example demonstrates how to add notes for the `min` and `max` values of the Line chart by setting the `notes` configuration of the `series`. The setting of the `noteTextField` option will also allow you to specify the note and its label position.

{% meta height:460 %}
{% embed_file series-types/line/features/main.vue preview %}
{% embed_file series-types/line/features/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
