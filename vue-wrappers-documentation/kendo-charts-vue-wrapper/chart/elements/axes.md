---
title: Axes
page_title: Axes - Chart Elements - Kendo UI for Vue
description: "Provide a value scale for the plotted data series when working with Kendo UI Charts in Vue projects."
slug: axes_chart_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/elements/axes/"

---

<div><WrapperBanner link="/kendo-vue-ui/components/charts"></WrapperBanner></div>

# Axes

The Chart axes provide a value scale for the plotted data series.

Depending on the [series types]({% slug area_seriestypes_charts_wrapper %}) of your project, the Chart delivers:

* A set of category and value axes (in Categorical and Radar series).
* A set of X and Y axes (in Scatter and Polar series).
* No axes (in Pie and Funnel series).

## Date Axes

To get a better visualization of seasonal data in your project, scale the date axis of the Bar Chart by either of the following approaches:

* Modify the base date unit of the X-axis through the `:category-axis-base-unit` prop. `:category-axis-base-unit` accepts the `second`, `minute`, `hour`, `day`, `week`, `month`, and `year` values.
* Modify the default aggregates of the series through the `:series-aggregate` prop. `:series-aggregate` accepts the `max`, `min`, `sum`, `avg` and `count` values.

{% meta height:700 %}
{% embed_file chart/elements/axes/date/main.vue preview %}
{% embed_file chart/elements/axes/date/main.js %}
{% endmeta %}

## Logarithmic Axes

A logarithmic axis is a special numeric axis that transforms the actual values by using a logarithmic function with a particular base. Logarithmic axes are suitable for displaying values which cover different orders of magnitude because they allow the Chart to render large together with small values in a more condensed scale than the default linear axis.

The following example demonstrates how to use a logarithmic axis for the Column Chart by setting the `:value-axis-type="'log'"` prop.

{% meta height:500 %}
{% embed_file chart/elements/axes/logarithmic/main.vue preview %}
{% embed_file chart/elements/axes/logarithmic/main.js %}
{% endmeta %}

## Multiple Axes

To leverage the Chart performance and visualize data on any number axis for providing solid business reports, the Bar Chart supports multiple axes.

The following example demonstrates how to implement a hybrid car-range report that is visualized through the **km**, **miles**, **miles per gallon**, and **liters per 100km** value axes. Each value axis has a unique name that is set through the `valueAxis.title` configuration. To specify the alignment of the value axes, populate the `categoryAxis.axisCrossingValue` array with values.

{% meta height:500 %}
{% embed_file chart/elements/axes/multiple/main.vue preview %}
{% embed_file chart/elements/axes/multiple/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
