---
title: Bar
page_title: Bar Series Type - Chart - Kendo UI for Vue
description: "Basic usage of the Kendo UI Bar charts in Vue projects."
slug: barcolumn_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/bar/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/bar"></WrapperBanner></div>

# Bar

Bar charts and Column charts are categorical charts which display data by using horizontal or vertical bars whose lengths vary according to their value.

Bar charts are suitable for displaying a comparison between several sets of data. For example, for showing a summary of unique and total site visitors over a certain period of time.

## Basic Usage

The following example demonstrates the Bar chart in action.

{% meta height:460 %}
{% embed_file series-types/bar/basic-usage/main.vue preview %}
{% embed_file series-types/bar/basic-usage/main.js %}
{% endmeta %}

## Data Binding

You can bind the Bar series to an array that contains:

* Numbers.
* Arrays which represent [value, category] tuples.
* Objects which are also referred to as models.

For more information on how to configure data-binding mode, refer to the article on [binding the Kendo UI Chart to data]({% slug databinding_chart_charts_wrapper %}).

## Sub-Types

The Bar charts feature the following sub-types:

* [Column Chart](#toc-column-chart)
* [Stacked Bar Chart](#toc-stacked-bar-chart)
* [100% Stacked Bar Chart](#toc-100-stacked-bar-chart)

### Column Chart

The Column chart visualizes data as vertical bars whose heights vary according to their value. It can be useful for presenting a comparison between several sets of data&mdash;for example, snapshots of data across different points in time.

Column charts are almost identical to Bar charts but the orientation of their bars is vertical and not horizontal. To define the chart series as horizontal, use the `:series-defaults-type="'column'"` prop.

{% meta height:460 %}
{% embed_file series-types/bar/column/main.vue preview %}
{% embed_file series-types/bar/column/main.js %}
{% endmeta %}


### Stacked Bar Chart

A stacked bar is a bar divided into subparts to represent cumulative effect, to display money distribution or production against time. To enable the stack feature, use the `:series-defaults-stack="true"` prop.

{% meta height:460 %}
{% embed_file series-types/bar/stacked/main.vue preview %}
{% embed_file series-types/bar/stacked/main.js %}
{% endmeta %}


The data series in a stacked Column or Bar chart have a single stack per category. You can arrange your data so that the chart will render more stacks per category&mdash;that is, you can group the stacks.

The following example demonstrates how to group stacked columns to display the world population compared by age and sex for a specific period of time by setting the `stack` option and apply the name of the stack to which the series belongs (`Male` or `Female` in the example).

{% meta height:460 %}
{% embed_file series-types/bar/group-stacked/main.vue preview %}
{% embed_file series-types/bar/group-stacked/main.js %}
{% endmeta %}

### 100% Stacked Bar Chart

The Bar charts support 100% stacking where the stacked series values are rescaled in a way they add up to 100%.

You can enable the 100% stack feature through the `:series-defaults-stack-type="'100%'"` chart attribute.

{% meta height:460 %}
{% embed_file series-types/bar/100-stacked/main.vue preview %}
{% embed_file series-types/bar/100-stacked/main.js %}
{% endmeta %}

## Gap and Spacing

The Bar chart component allows you to control the distance between its categories and between the series points within a category through the `:series-gap` and `:series-spacing` props.

{% meta height:500 %}
{% embed_file series-types/bar/gap-spacing/main.vue preview %}
{% embed_file series-types/bar/gap-spacing/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
