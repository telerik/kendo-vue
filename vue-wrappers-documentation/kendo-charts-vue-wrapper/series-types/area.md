---
title: Area
page_title: Area Series Type - Chart - Kendo UI for Vue
description: "Basic usage of the Kendo UI Area and Vertical Area Charts in Vue projects."
slug: area_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/area/"
---


<div><WrapperBanner link="/kendo-vue-ui/components/charts/area"></WrapperBanner></div>

# Area

Area charts are categorical charts which are suitable for displaying quantitative data by using continuous lines.

The Area chart is suitable for displaying quantitative data by using continuous lines passing through points defined by the values of their items. The portion of the graph beneath the lines is filled with a particular color for each series. The different colors in an Area chart are useful for emphasizing changes in values coming from several sets of similar data.

## Basic Usage

The following example demonstrates the Area chart in action.

{% meta height:460 %}
{% embed_file series-types/area/basic-usage/main.vue preview %}
{% embed_file series-types/area/basic-usage/main.js %}
{% endmeta %}

## Data Binding

You can bind the Area series to an array that contains:

* Numbers.
* Arrays which represent `[value, category]` tuples.
* Objects which are also referred to as models.

For more information on how to configure each data-binding mode, refer to the article on [binding the Kendo UI Chart to data]({% slug databinding_chart_charts_wrapper %}).

## Sub-Types

The Area charts feature the following sub-types:

* [Stacked Area Charts](#toc-stacked-area-charts)
* [100% Stacked Area Charts](#toc-100-stacked-area-charts)
* [Stepped Area Charts](#toc-stepped-area-charts)
* [Smooth Area Charts](#toc-smooth-area-charts)

### Stacked Area Charts

Stacked Area charts are suitable for indicating the proportion of individual values to the total. To set the Area series sub-type, set `series-defaults-stack` to `true`.

Multiple series that are rendered in the same Area chart will overlap one another by default. To avoid that, you can stack these series on top of one another so that the data values at each x-value are summed. In an Area chart, the value for each series will always be stacked relatively to the preceding one.

{% meta height:460 %}
{% embed_file series-types/area/stacked/main.vue preview %}
{% embed_file series-types/area/stacked/main.js %}
{% endmeta %}

### 100% Stacked Area Charts

100% stacked Area charts are suitable for indicating the proportion of individual values as a percentage of the total. To define a stacked Area series sub-type, set `series-defaults-stack-type` to `"'100%'"`.

> While it is possible to plot negative values in a 100% stacked chart, the results are hard for the user to interpret.

{% meta height:460 %}
{% embed_file series-types/area/100-stacked/main.vue preview %}
{% embed_file series-types/area/100-stacked/main.js %}
{% endmeta %}

### Stepped Area Charts

The stepped Area chart is a variation of the Area chart where each data point from the series is connected with vertical and horizontal lines to form a step-like progression. Stepped Area charts are useful for highlighting the increase or decrease in values over time. To define a stepped Area chart, set `line-style` to `"'step'"`.

{% meta height:460 %}
{% embed_file series-types/area/stepped/main.vue preview %}
{% embed_file series-types/area/stepped/main.js %}
{% endmeta %}

### Smooth Area Charts

A smooth Area chart (spline) chart is a form of Area charts where each data point from the series is connected with a curved line which represents a rough approximation of the missing data points. To define a smooth Area chart, set `line-style` to `"'smooth'"`.

{% meta height:460 %}
{% embed_file series-types/area/smooth/main.vue preview %}
{% embed_file series-types/area/smooth/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
