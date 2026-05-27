---
title: Bar
description: "Basic usage of the Kendo UI for Vue Bar and Column charts in Vue projects."
slug: barcolumn_seriestypes_charts
position: 45
---

# Bar

Bar charts and Column charts are categorical charts which display data by using horizontal or vertical bars whose lengths vary according to their value.

Bar charts are suitable for displaying a comparison between multiple sets of data&mdash;for example, for showing a summary of unique and total site visitors over a period of time. The series are placed next to each other with predefined spacing between them.

Column charts are functionally equivalent to Bar charts, but transpose the axes&mdash;the category axis is vertical and the value axis is horizontal.

## Basic Usage

The following example demonstrates the Bar chart in action.

{% meta height:465 %}
{% embed_file series-types/bar/basic/main.vue preview %}
{% embed_file series-types/bar/basic/main.js %}
{% endmeta %}

## Column Chart

The following example demonstrates the Column chart in action.

{% meta height:465 %}
{% embed_file series-types/bar/column/main.vue preview %}
{% embed_file series-types/bar/column/main.js %}
{% endmeta %}

## Gap and Spacing

You can control the distance between bars by using the gap and spacing variables. To control the distance between the categories, set [`gap`]({% slug api_charts_chartseriesitemprops %}#toc-gap) to the first series item as a percentage of the bar width. The setting of the `gap` property is applied to all series and you do not have to set the rest of the series explicitly.

{% meta height:465 %}
{% embed_file series-types/bar/gap/main.vue preview %}
{% embed_file series-types/bar/gap/main.js %}
{% endmeta %}

To control the distance between bars in a single category, set [`spacing`]({% slug api_charts_chartseriesitemprops %}#toc-spacing) to the first series item as a percentage of the bar width. The setting of the `spacing` property is applied to all series and you do not have to set the rest of the series explicitly.

{% meta height:465 %}
{% embed_file series-types/bar/spacing/main.vue preview %}
{% embed_file series-types/bar/spacing/main.js %}
{% endmeta %}

## Data Binding

You can bind the Bar series to an array that contains:

* Numbers.
* Arrays which represent `[value, category]` tuples.
* Objects which are also referred to as models.

When binding the Bar series to objects (models), the user selects the relevant fields through the available bindings:

| Model binding    | Data type                       | Required | Description
| ---              | ---                             | ---      | ---
| `field`          | `number`/`null`                 | Yes      | The value of the data point, if any.
| `categoryField`  | `string`/`date`/`number`/`null` | No       | The category of the data point, if any.
| `colorField`     | `string`                        | No       | The color of the data point, if overridden.

For more information on how to configure data-binding mode, refer to the article on [binding the Kendo UI for Vue Chart to data]({% slug databinding_chart_charts %}).

## Sub-Types

The Bar charts feature the following sub-types:

* [Stacked Bar Charts](#toc-stacked-bar-charts)
* [100% Stacked Bar Charts](#toc-100-stacked-bar)

### Stacked Bar Charts

Stacked Bar charts are suitable for indicating the proportion of individual values to the total. To select this series sub-type, set the [`stack`]({% slug api_charts_chartseriesitemprops %}#toc-stack) property of the first series item to `true`. The setting of the `stack` property is applied to all series and you do not have to set the rest of the series explicitly. Yet, you can override the configuration per series.

Series are plotted on top of each other. The stack value is the sum of all values up until the current series. Negative values are placed on a separate stack.

{% meta height:465 %}
{% embed_file series-types/bar/stacked/main.vue preview %}
{% embed_file series-types/bar/stacked/main.js %}
{% endmeta %}

You can also place groups of series on separate stacks.

{% meta height:465 %}
{% embed_file series-types/bar/stacked-group/main.vue preview %}
{% embed_file series-types/bar/stacked-group/main.js %}
{% endmeta %}

### 100% Stacked Bar

100% Stacked Bar Charts are suitable for indicating the proportion of individual values as a percentage of the total. To select this series sub-type, set the [`stack`]({% slug api_charts_chartseriesitemprops %}#toc-stack) property of the first series item to a `{ type: '100%' }` object. The setting of the `stack` property is applied to all series and you do not have to set the rest of the series explicitly. Yet, you can override the configuration per series.

> While it is possible to plot negative values in a 100% stacked chart, the results are hard for the user to interpret.

The following example demonstrates how the series data is converted into percentages.

{% meta height:465 %}
{% embed_file series-types/bar/100-stacked/main.vue preview %}
{% embed_file series-types/bar/100-stacked/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [Area Charts]({% slug area_seriestypes_charts %})
* [Box Plot Charts]({% slug boxplot_seriestypes_charts %})
* [Bullet Charts]({% slug bullet_seriestypes_charts %})
* [Line Charts]({% slug line_seriestypes_charts %})
* [Radar Charts]({% slug radar_seriestypes_charts %})
* [RangeArea Charts]({% slug rangearea_seriestypes_charts %})
* [RangeBar Charts]({% slug rangebar_seriestypes_charts %})
* [Waterfall Charts]({% slug waterfall_seriestypes_charts %})
