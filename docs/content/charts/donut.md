---
title: Donut
description: "Basic usage of the Kendo UI for Vue Native Donut charts in Vue projects."
slug: donut_seriestypes_charts
position: 65
---

# Donut

Donut charts are circular charts which represent a variation of the [Pie charts]({% slug pie_seriestypes_charts %}) and are capable of displaying multiple nested series.

You can use the blank center of a Donut chart to show additional information in it.

## Basic Usage

The following example demonstrates the Donut chart in action.

{% meta height:465 %}
{% embed_file chart/donut/main.vue preview %}
{% embed_file chart/donut/main.js %}
{% embed_file shared/power-distribution-data.json %}
{% endmeta %}

## Displaying Multiple Series

The Donut chart renders multiple series in the form of concentric rings. This behavior is different from the behavior of the Pie chart, which supports only one series.

{% meta height:465 %}
{% embed_file chart/donut-series/main.vue preview %}
{% embed_file chart/donut-series/main.js %}
{% embed_file shared/donut-series-data.json %}
{% endmeta %}

## Displaying Information in the Center

To display content in the center of the Donut chart, either:

* [Use the Donut center template](#toc-using-the-center-template), or
* [Implement drawing visuals](#toc-using-drawing-visuals).

### Using the Center Template

The center template is an HTML overlay that is positioned over the center of the Donut chart. To implement the content use the [donutCenterRender]({% slug api_charts_chartprops %}#toc-donutcenterrender) render prop of the `Chart` component.

> While documents which are exported through the [HTML Drawing API]({% slug drawingofhtmlelements_drawing %}) display the content of the center template, vector graphics and [exported files]({% slug export_chart_charts %}) do not render it.

{% meta height:465 %}
{% embed_file chart/donut-center/main.vue preview %}
{% embed_file chart/donut-center/main.js %}
{% embed_file shared/power-distribution-data.json %}
{% endmeta %}

### Using Drawing Visuals

Similar to the other Chart types, you can overlay the Donut series with custom [drawing elements]({% slug overview_drawing %}). The approach of using drawing visuals is more flexible than using the donut center template and also has the advantage that the overlay is part of the chart drawing surface. As a result, all [exported files]({% slug export_chart_charts %}) render the content of the donut center as an integral element of the component.

{% meta height:465 %}
{% embed_file chart/donut-center-visuals/main.vue preview %}
{% embed_file chart/donut-center-visuals/main.js %}
{% embed_file shared/power-distribution-data.json %}
{% endmeta %}

## Suggested Links

* [Customize the Label Colors of a Donut Chart with Multiple Series]({% slug donut-chart-multiple-series-different-label-colors %})
* [API Reference of the Charts]({% slug api_charts %})
* [Pie Charts]({% slug pie_seriestypes_charts %})
