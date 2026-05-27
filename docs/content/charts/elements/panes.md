---
title: Panes
description: "Configure the panes of the Kendo UI for Vue Chart in Vue projects."
slug: panes_chart_charts
---

# Panes

The Chart panes enable you to create vertical sub-divisions in a single categorical Chart.

You have to set an individual value axis to each pane. Multiple panes can share a category axis.

> Only the [Categorical Chart series]({% slug area_seriestypes_charts %}#toc-categorical) support the configuration of panes.

Panes are declared through the [ChartPane]({% slug api_charts_chartpaneprops %}) configuration components and placed in a `ChartPanes` collection. To control the series placement, plot the series on a value axis which is placed in the desired pane.



{% meta height:500 %}
{% embed_file elements/panes/overview/main.vue preview %}
{% embed_file elements/panes/overview/main.js %}
{% endmeta %}


## Default Settings

Settings that apply to all panes can be declared through the [ChartPaneDefaults]({% slug api_charts_chartpanedefaultsprops %}) configuration component.

The following example sets the default margin and title font for the panes:



{% meta height:500 %}
{% embed_file elements/panes/default/main.vue preview %}
{% embed_file elements/panes/default/main.js %}
{% endmeta %}


## Disable Clipping

By default, the pane content cannot extend beyond its border. This prevents charts from overlapping other elements like the legend or title.

Pane clipping may be undesired, for example when plotting series markers at the edge of the pane.
To disable clipping, set the [clip]({% slug api_charts_chartpaneprops %}#toc-clip) prop to `false`:



{% meta height:500 %}
{% embed_file elements/panes/clip/main.vue preview %}
{% embed_file elements/panes/clip/main.js %}
{% endmeta %}


## Suggested Links

* [Axes]({% slug axes_chart_charts %})
* [Chart Area]({% slug chartarea_chart_charts %})
* [Crosshairs]({% slug crosshairs_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Labels]({% slug labels_chart_charts %})
* [Legend]({% slug legend_chart_charts %})
* [Notes]({% slug notes_chart_charts %})
* [Plot Area]({% slug plotarea_chart_charts %})
* [Plot Bands]({% slug plotbands_chart_charts %})
* [Selection]({% slug selection_chart_charts %})
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
