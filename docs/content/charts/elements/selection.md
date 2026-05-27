---
title: Selection
description: "Enable users to select a range from a category axis in the Kendo UI for Vue Chart."
slug: selection_chart_charts
---

# Selection

The Chart category axis enables users to select a specific range by clicking, dragging, resizing, or mouse-wheeling.

To enable the selection, set the [`select`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-select) option of the category axis.

> Selection is supported only for horizontal category axes.

The following example demonstrates how to enable the selection.



{% meta height:465 %}
{% embed_file elements/selection/overview/main.vue preview %}
{% embed_file elements/selection/overview/main.js %}
{% endmeta %}


## Using Selection as Navigator

The following example demonstrates how to use the [`onSelectEnd`]({% slug api_charts_chartprops %}#toc-onselectend) event to filter the main pane data.



{% meta height:465 %}
{% embed_file elements/selection/navigator/main.vue preview %}
{% embed_file elements/selection/navigator/main.js %}
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
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
