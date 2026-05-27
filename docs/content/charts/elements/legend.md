---
title: Legend
description: "Configure the legend of the Kendo UI for Vue Chart in Vue projects."
slug: legend_chart_charts
---

# Legend

The Chart legend displays the name of the configured data series.

To customize the legend, use the [ChartLegend]({% slug api_charts_chartlegendprops %}) configuration component.

The following example demonstrates how to configure the position and orientation of the Chart legend.



{% meta height:500 %}
{% embed_file elements/legend/overview/main.vue preview %}
{% embed_file elements/legend/overview/main.js %}
{% endmeta %}


## Hiding the Legend

If you set the series names, the Chart displays a default legend.

The following example demonstrates how to hide the legend by using its [`visible`]({% slug api_charts_chartlegendprops %}#visible) property.

{% meta height:500 %}
{% embed_file elements/legend/hide-legend/main.vue preview %}
{% embed_file elements/legend/hide-legend/main.js %}
{% endmeta %}

## Configuring the Legend Items

The Legend Item types and settings are derived from the series configuration. For additional configuration, use the series series [`legendItem`]({% slug api_charts_chartseriesitemprops %}#legenditem) property.

The following example shows the different Legend Item types:

{% meta height:500 %}
{% embed_file elements/legend/legend-items/main.vue preview %}
{% embed_file elements/legend/legend-items/main.js %}
{% endmeta %}

## Clicking Legend Items

Clicking the legend items triggers the [`onLegendItemClick`]({% slug api_charts_chartprops %}#onlegenditemclick) event which can be used to toggle the visibility of the clicked series. When `onLegendItemClick` is not handled, the Chart itself toggles the series visibility.

{% meta height:500 %}
{% embed_file elements/legend/click-legend/main.vue preview %}
{% embed_file elements/legend/click-legend/main.js %}
{% endmeta %}

## Customizing the Position

You can remove the legend from the flow and absolutely position it by setting the position to `custom` and configuring the `offsetX` and `offsetY` options.

{% meta height:500 %}
{% embed_file elements/legend/custom-legend-position/main.vue preview %}
{% embed_file elements/legend/custom-legend-position/main.js %}
{% endmeta %}

## Setting a Title

The Chart legend section can be configured to hold a title with customizable layout and content.
To define a title, use the [`ChartLegendTitle`]({% slug api_charts_chartlegendtitleprops %}) component.

{% meta height:500 %}
{% embed_file elements/legend/title/main.vue preview %}
{% embed_file elements/legend/title/main.js %}
{% endmeta %}

## Suggested Links

* [Axes]({% slug axes_chart_charts %})
* [Chart Area]({% slug chartarea_chart_charts %})
* [Crosshairs]({% slug crosshairs_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Labels]({% slug labels_chart_charts %})
* [Notes]({% slug notes_chart_charts %})
* [Panes]({% slug panes_chart_charts %})
* [Plot Area]({% slug plotarea_chart_charts %})
* [Plot Bands]({% slug plotbands_chart_charts %})
* [Selection]({% slug selection_chart_charts %})
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
