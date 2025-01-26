---
title: Polar
page_title: Polar Series Type - Chart - Kendo UI for Vue
description: "Basic usage of the Kendo UI Polar Charts in Vue projects."
slug: polar_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/polar/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/polar"></WrapperBanner></div>

# Polar

Polar charts are scatter charts which display two-dimensional data series in polar coordinates.

## Basic Usage

The following example demonstrates the Polar chart in action.

{% meta height:460 %}
{% embed_file series-types/polar/basic-usage/main.vue preview %}
{% embed_file series-types/polar/basic-usage/main.js %}
{% endmeta %}

## Sub-Types

The Radar charts feature the following sub-types:

* [Smooth Polar Line Charts](#toc-smooth-polar-line-charts)
* [Polar Scatter Charts](#toc-polar-scatter-charts)
* [Polar Area Charts](#toc-polar-area-charts)

### Smooth Polar Line Charts

The following example demonstrates how to configure a smooth (spline) radar line style for the Radar chart.

{% meta height:460 %}
{% embed_file series-types/polar/smooth/main.vue preview %}
{% embed_file series-types/polar/smooth/main.js %}
{% endmeta %}

### Polar Scatter Charts

The following example demonstrates how to create a Polar scatter chart whose series type is represented on the chart as non-connected data points. You can define a Polar scatter series by setting `series-defaults-type="'polarScatter'"`.

{% meta height:460 %}
{% embed_file series-types/polar/scatter/main.vue preview %}
{% embed_file series-types/polar/scatter/main.js %}
{% endmeta %}

### Polar Area Charts

The following example demonstrates how to create a Polar area chart whose series type is represented by data points connected with straight line segments that enclose a filled area together with the chart pole. To define a Polar area chart, set `type` to `"'polarArea'"`.

{% meta height:460 %}
{% embed_file series-types/polar/area/main.vue preview %}
{% embed_file series-types/polar/area/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
