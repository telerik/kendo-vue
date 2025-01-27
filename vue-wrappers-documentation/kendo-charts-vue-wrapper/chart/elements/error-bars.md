---
title: Error Bars
page_title: Error Bars - Chart Elements - Kendo UI for Vue
description: "Indicate the data variability by using error bars of the Kendo UI Chart for Vue."
slug: error_bars_chart_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/elements/error-bars/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts"></WrapperBanner></div>

# Error Bars

The error bars enable you to indicate the variability of the Chart data.

The error bars are available for the following Chart series types:

* Area
* Vertical Area
* Column
* Bar
* Line
* Vertical Line
* Scatter
* ScatterLine

The error bars support statistical calculations based on the series data. The supported types represent standard error and population standard deviation.

To configure the error bars, use the `:series-error-bars` prop. To indicate that the Chart will use standard error, set `stderr` as a value.

{% meta height:500 %}
{% embed_file chart/elements/error-bars/main.vue preview %}
{% embed_file chart/elements/error-bars/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
