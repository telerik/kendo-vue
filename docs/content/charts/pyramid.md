---
title: Pyramid
description: "Use the Kendo UI for Vue Pyramid charts in Vue projects."
slug: pyramid_seriestypes_charts
position: 87
---

# Pyramid

Pyramid charts are freeform charts, which display a single series of data as pyramid segments, where each segment represents the value for the particular item from the series. The values of the items can also influence the height of the corresponding segments.

## Basics

The Kendo UI for Vue Pyramid Charts are useful for representing stages in a sales process and for displaying the amount of potential revenues from each stage. They are also suitable for identifying potential problem areas in the sales processes of an organization and for displaying several values.

The following example demonstrates the Pyramid chart in action.

{% meta height:480 %}
{% embed_file chart/pyramid/basic/main.vue preview %}
{% embed_file chart/pyramid/basic/main.js %}
{% endmeta %}

## Fixed Height

By default, the height of the pyramid segments is proportional to the value. You can use a fixed height for all segments by setting [`dynamicHeight`]({% slug api_charts_chartseriesitemprops %}#toc-dynamicheight) property to `false`.

The following example demonstrates the `dynamicHeight` property in action.

{% meta height:580 %}
{% embed_file chart/pyramid/dynamic-height/main.vue preview %}
{% embed_file chart/pyramid/dynamic-height/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [Line Charts]({% slug line_seriestypes_charts %})
* [Glossary]({% slug glossary_charts %})
