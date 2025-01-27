---
title: Radar
page_title: Radar Series Type - Chart - Kendo UI for Vue
description: "Basic usage of the Kendo UI Radar Charts in Vue projects."
slug: radar_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/radar/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/radar"></WrapperBanner></div>

# Radar

Radar charts, also known as Spider charts, are categorical charts which wrap the X axis in a circle or polygon.

## Basic Usage

The following example demonstrates the Radar chart in action.

{% meta height:460 %}
{% embed_file series-types/radar/basic-usage/main.vue preview %}
{% embed_file series-types/radar/basic-usage/main.js %}
{% endmeta %}

## Sub-Types

The Radar charts feature the following sub-types:

* [Smooth Radar Line Charts](#toc-smooth-radar-charts)
* [Radar Area Charts](#toc-area-radar-charts)
* [Radar Column Charts](#toc-column-radar-charts)

### Smooth Radar Line Charts

The following example demonstrates shows how to configure smooth (line) radar line style for the Radar chart.

{% meta height:460 %}
{% embed_file series-types/radar/smooth/main.vue preview %}
{% embed_file series-types/radar/smooth/main.js %}
{% endmeta %}

### Radar Area Charts

The following example demonstrates how to create a Radar area chart whose series type is represented by data points connected with straight line segments that enclose a filled area. To configure a Radar area chart, set `series-defaults-type` to `"'radarArea'"`.

{% meta height:460 %}
{% embed_file series-types/radar/area/main.vue preview %}
{% embed_file series-types/radar/area/main.js %}
{% endmeta %}

### Radar Column Charts

The following example demonstrates how to create a Radar column chart whose series type is represented as data columns with height that varies depending on their value.

{% meta height:460 %}
{% embed_file series-types/radar/column/main.vue preview %}
{% embed_file series-types/radar/column/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
