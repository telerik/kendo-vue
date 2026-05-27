---
title: Series
description: "Configure the Kendo UI for Vue Chart series in Vue projects."
slug: series_chart_charts
---

# Series

The data series are the main components of the Chart.

The rest of the Chart elements play a supportive role for the user when understanding the plotted series.

The Chart supports the following series types:

* [Area and Vertical Area]({% slug area_seriestypes_charts %})
* [Bar and Column]({% slug barcolumn_seriestypes_charts %})
* [Box Plot]({% slug boxplot_seriestypes_charts %})
* [Bubble]({% slug bubble_seriestypes_charts %})
* [Bullet]({% slug bullet_seriestypes_charts %})
* [Donut]({% slug donut_seriestypes_charts %})
* [Funnel]({% slug funnel_seriestypes_charts %})
* [Pyramid]({% slug pyramid_seriestypes_charts %})
* [Line and Vertical Line]({% slug line_seriestypes_charts %})
* [Pie]({% slug pie_seriestypes_charts %})
* [Polar]({% slug polar_seriestypes_charts %})
* [Radar]({% slug radar_seriestypes_charts %})
* [Range Bar]({% slug rangebar_seriestypes_charts %})
* [Scatter and Scatter Line]({% slug scatterline_seriestypes_charts %})
* [Waterfall]({% slug waterfall_seriestypes_charts %})

## Basic Usage

Series are declared by using the [ChartSeriesItem]({% slug api_charts_chartseriesitemprops %}) configuration components and placed in a `ChartSeries` collection.

For more information on how to configure each Chart series, refer to the articles on the [series types]({% slug area_seriestypes_charts %}). For more information on how to bind the series to data, refer to the article on [data binding]({% slug databinding_chart_charts %}).

The following example configures a set of Scatter Line series.



{% meta height:475 %}
{% embed_file elements/series/overview/main.vue preview %}
{% embed_file elements/series/overview/main.js %}
{% endmeta %}


## Default Series Configuration

You can apply a subset of settings to all Chart series by using the [`ChartSeriesDefaults`]({% slug api_charts_chartseriesdefaultsprops %}) component.

The ChartSeriesDefaults component supports the following child components:

* [`ChartSeriesDefaultsLabels`]({% slug api_charts_chartseriesdefaultslabelsprops %})
* [`ChartSeriesDefaultsNotes`]({% slug api_charts_chartseriesdefaultsnotesprops %})

The following example demonstrates how to set the default series type and labels.

{% meta height:475 %}
{% embed_file elements/series/configuration/main.vue preview %}
{% embed_file elements/series/configuration/main.js %}
{% endmeta %}

## Suggested Links

* [Axes]({% slug axes_chart_charts %})
* [Chart Area]({% slug chartarea_chart_charts %})
* [Crosshairs]({% slug crosshairs_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Labels]({% slug labels_chart_charts %})
* [Legend]({% slug legend_chart_charts %})
* [Notes]({% slug notes_chart_charts %})
* [Panes]({% slug panes_chart_charts %})
* [Plot Area]({% slug plotarea_chart_charts %})
* [Plot Bands]({% slug plotbands_chart_charts %})
* [Selection]({% slug selection_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
