---
title: Plot Bands
description: "Highlight a static range on the axes by using plot bands in the Kendo UI for Vue Chart."
slug: plotbands_chart_charts
---

# Plot Bands

The Chart plot bands allow you to highlight a specific range of an axis.

To display plot bands, set the axis `plotBands` option to an array of [`PlotBand`]({% slug api_charts_plotband %}).

The following example demonstrates how to configure the plot bands of an axis.



{% meta height:465 %}
{% embed_file elements/plot-bands/overview/main.vue preview %}
{% embed_file elements/plot-bands/overview/main.js %}
{% endmeta %}


## Labels

Each plot band can be configured to display an optional [label]({% slug api_charts_plotband %}).

The following example demonstrates how to display and style plot band labels.



{% meta height:465 %}
{% embed_file elements/plot-bands/labels/main.vue preview %}
{% embed_file elements/plot-bands/labels/main.js %}
{% endmeta %}


## Custom Plot Bands

To visualize the range in a different way or to show additional elements, manually draw the plot bands by using the [Drawing API]({% slug overview_drawing %}) in the [`onRender`]({% slug api_charts_chartprops %}#toc-onrender) event.

To get the range coordinates:

1. Find the [axis]({% slug api_charts_chartaxistype %}) by name.
1. Use the [`slot`]({% slug api_charts_chartaxistype %}#toc-slot) method.

The following example demonstrates how to draw custom plot bands.



{% meta height:465 %}
{% embed_file elements/plot-bands/custom/main.vue preview %}
{% embed_file elements/plot-bands/custom/main.js %}
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
* [Selection]({% slug selection_chart_charts %})
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
