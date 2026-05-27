---
title: Line
description: "Basic usage of the Kendo UI for Vue Line and Vertical Line charts in Vue projects."
slug: line_seriestypes_charts
position: 75
---

# Line

Line charts and Vertical Line charts are categorical charts which display continuous data as lines that pass through points defined by the values of their items.

Line charts are useful for rendering trends over time or at equal time intervals, and for comparing sets of similar data.

Vertical Line charts are functionally equivalent to Line charts, but transpose the axes&mdash;the category axis is vertical and the value axis is horizontal.

## Basic Usage

The following example demonstrates the Line chart in action.

{% meta height:465 %}
{% embed_file series-types/line/basic/main.vue preview %}
{% embed_file series-types/line/basic/main.js %}
{% endmeta %}

## Vertical Line Chart

The following example demonstrates the Vertical Line Chart in action.

{% meta height:465 %}
{% embed_file series-types/line/vertical/main.vue preview %}
{% embed_file series-types/line/vertical/main.js %}
{% endmeta %}

## Choosing Line over Scatter Line Charts

Line charts and [Scatter Line charts]({% slug scatterline_seriestypes_charts %}) look visually the same because the data points in the plot area are connected with lines. However, they significantly differ in the way each series type plots the data it presents in the plot area.

In Line charts, the vertical axis is a value axis and the horizontal axis is a category axis. This means that the category axis displays groupings of data and not numerical values. That is why the data points of the Line charts are distributed as evenly-spaced coordinates.

The fundamental differences between the two series types make each a more suitable solution in particular scenarios. Line charts are better to use when your project requires you to:

* Use text labels along the horizontal axis.
* Use a few numerical labels along the horizontal axis.
* Use time scales along the horizontal axis.

## Line Style

Line charts enable you to render the lines between the points in different styles. To set the appearance of the lines, use the [`line.style`]({% slug api_charts_seriesline %}#toc-style) option which provides the following available styles:
* Normal&mdash;The default style which produces a straight line between data points.
* Step&mdash;The style renders the connection between the data points through vertical and horizontal lines. It is suitable for indicating that the value is constant between the changes.
* Smooth&mdash;The style causes the Line chart to display a fitted curve through data points. It is suitable displaying data with a curve and for connecting the points with smooth instead of straight lines.

The following example demonstrates how to use the different types of lines.

{% meta height:500 %}
{% embed_file series-types/line/line-style/main.vue preview %}
{% embed_file series-types/line/line-style/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [Area Charts]({% slug area_seriestypes_charts %})
* [Bar Charts]({% slug barcolumn_seriestypes_charts %})
* [Box Plot Charts]({% slug boxplot_seriestypes_charts %})
* [Bullet Charts]({% slug bullet_seriestypes_charts %})
* [Radar Charts]({% slug radar_seriestypes_charts %})
* [RangeArea Charts]({% slug rangearea_seriestypes_charts %})
* [RangeBar Charts]({% slug rangebar_seriestypes_charts %})
* [Waterfall Charts]({% slug waterfall_seriestypes_charts %})
