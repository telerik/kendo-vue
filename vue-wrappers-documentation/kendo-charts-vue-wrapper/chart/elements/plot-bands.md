---
title: Plot Bands
page_title: Plot Bands - Chart Elements - Kendo UI for Vue
description: "Highlight a static range on the axes by using plot bands in the Kendo UI Chart for Vue."
slug: plot_bands_chart_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/elements/plot-bands/"
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts"></WrapperBanner></div>

# Plot Bands

The Chart plot bands allow you to highlight a specific range of an axis.

Plot Bands represent colored ranges that highlight certain areas in the Chart&mdash;usually specific thresholds which designate whether the data falls under specific boundaries or not. To create the plot bands, set the `plotBands` configuration of `valueAxis`.

You can independently set each plot band by specifying the following properties:

* `from`&mdash;The start position of the plot band.
* `to`&mdash;The end position of the plot band.
* `opacity`&mdash;The opacity of the plot band.
* `color`&mdash;The color of the plot band.

{% meta height:500 %}
{% embed_file chart/elements/plot-bands/main.vue preview %}
{% embed_file chart/elements/plot-bands/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
