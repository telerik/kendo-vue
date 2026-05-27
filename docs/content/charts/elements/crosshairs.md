---
title: Crosshairs
description: "Highlight the current cursor position by using the crosshairs of the Kendo UI for Vue Chart."
slug: crosshairs_chart_charts
---

# Crosshairs

The Chart crosshairs are lines which are perpendicular to the axes and enable the user to see the exact value at the current cursor position.

To enable the crosshair for an axis, either:
* Add the corresponding crosshair component, or
* Set the `crosshair.visible` option to `true`.

The following example demonstrates how to enable the crosshairs.



{% meta height:465 %}
{% embed_file elements/crosshairs/overview/main.vue preview %}
{% embed_file elements/crosshairs/overview/main.js %}
{% endmeta %}


## Current Cursor Values

To get the current hovered values, use the [`onPlotAreaHover`]({% slug api_charts_chartprops %}#toc-onplotareahover) event.

The following example demonstrates how to get the hovered values.

{% meta height:465 %}
{% embed_file elements/crosshairs/cursor-values/main.vue preview %}
{% embed_file elements/crosshairs/cursor-values/main.js %}
{% endmeta %}

## Suggested Links

* [Axes]({% slug axes_chart_charts %})
* [Chart Area]({% slug chartarea_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Labels]({% slug labels_chart_charts %})
* [Legend]({% slug legend_chart_charts %})
* [Notes]({% slug notes_chart_charts %})
* [Panes]({% slug panes_chart_charts %})
* [Plot Area]({% slug plotarea_chart_charts %})
* [Plot Bands]({% slug plotbands_chart_charts %})
* [Selection]({% slug selection_chart_charts %})
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
