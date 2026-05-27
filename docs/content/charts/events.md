---
title: Events
description: "Learn how to use the Kendo UI for Vue Native Chart events"
slug: charts_events
position: 130
---

# Events

This article provides details about the different events available in the Chart API.

## List of available Chart events
* [onAxisLabelClick]({% slug api_charts_chartprops %}#toc-onaxislabelclick) - Triggered when the user clicks on the label of the Chart Axis.
* [onDrag]({% slug api_charts_chartprops %}#toc-ondrag) - Triggered when the user clicks on the Chart, hold the mouse button down and start to drag the cursor.
* [onDragStart]({% slug api_charts_chartprops %}#toc-ondragstart) - Triggered when the Drag over the Chart starts.
* [onDragEnd]({% slug api_charts_chartprops %}#toc-ondragend) - Triggered when the Drag over the Chart ends.
* [onLegendItemClick]({% slug api_charts_chartprops %}#toc-onlegenditemclick) - Triggered when a Legend Item is clicked.
* [onLegendItemHover]({% slug api_charts_chartprops %}#toc-onlegenditemhover) - Triggered when a Legend Item is hovered.
* [onNoteClick]({% slug api_charts_chartprops %}#toc-onnoteclick) - Triggered when a Note is clicked.
* [onNoteHover]({% slug api_charts_chartprops %}#toc-onnotehover) - Triggered when a Note is hovered.
* [onPlotAreaClick]({% slug api_charts_chartprops %}#toc-onplotareaclick) - Triggered when the Plot Area is clicked.
* [onPlotAreaHover]({% slug api_charts_chartprops %}#toc-onplotareahover) - Triggered when the Plot Area is hovered.
* [onRender]({% slug api_charts_chartprops %}#toc-onrender) - Triggered when the Chart is rendered.
* [onSelect]({% slug api_charts_chartprops %}#toc-onselect) - Triggered when the Category Axis item is selected. For more details, check [this example](#toc-onselect-onselectstart-and-onselectend-events-demo).
* [onSelectStart]({% slug api_charts_chartprops %}#toc-onselectstart) - Triggered when the Category Axis item selection starts. For more details, check [this example](#toc-onselect-onselectstart-and-onselectend-events-demo).
* [onSelectEnd]({% slug api_charts_chartprops %}#toc-onselectend) - - Triggered when the Category Axis item selection ends. For more details, check [this example](#toc-onselect-onselectstart-and-onselectend-events-demo).
* [onSeriesClick]({% slug api_charts_chartprops %}#toc-onseriesclick) - Triggered when the Chart series is clicked.
* [onSeriesHover]({% slug api_charts_chartprops %}#toc-onserieshover) - Triggered when the Chart series is hovered.
* [onZoom]({% slug api_charts_chartprops %}#toc-onzoom) - Triggered when the Chart is Zoomed.
* [onZoomStart]({% slug api_charts_chartprops %}#toc-onzoomstart) - Triggered when the Chart Zoom starts.
* [onZoomEnd]({% slug api_charts_chartprops %}#toc-onzoomend) - Triggered when the Chart Zoom ends.


> Below you will see demos of all Chart events. The events in the demos are separated by event type and context in which each of them is triggered.

## Chart events demo

The below example demonstrates the usage of the `onAxisLabelClick`, `onLegendItemClick`, `onLegendItemHover`, `onNoteClick`, `onNoteHover`, `onPlotAreaClick`, `onPlotAreaHover`, `onRender`, `onSeriesClick`, `onSeriesHover` events. For more information about the usage of the other events see the other example in the current article.

{% meta height:660 %}
{% embed_file events/basic/main.vue preview %}
{% embed_file events/basic/Logger.vue %}
{% embed_file events/basic/main.js %}
{% endmeta %}


## onDrag, onDragStart and onDragEnd events demo

The below example demonstrates the usage of the `onDrag`, `onDragStart` and `onDragEnd` events.

{% meta height:660 %}
{% embed_file events/drag/main.vue preview %}
{% embed_file events/drag/Logger.vue %}
{% embed_file events/drag/main.js %}
{% endmeta %}

## onSelect, onSelectStart and onSelectEnd events demo

The `onSelect`, `onSelectStart` and `onSelectEnd` events are triggered when the [select property]({% slug api_charts_chartcategoryaxisitemprops %}#toc-select) of the `ChartCategoryAxisItem` is defined.

{% meta height:660 %}
{% embed_file events/select/main.vue preview %}
{% embed_file events/select/Logger.vue %}
{% embed_file events/select/main.js %}
{% endmeta %}

## onZoom, onZoomStart and onZoomEnd events demo

The `onZoom`, `onZoomStart` and `onZoomEnd` events are triggered when the [zoomable property]({% slug api_charts_chartcategoryaxisitemprops %}#toc-zoomable) of the `Chart` is set to true.

{% meta height:660 %}
{% embed_file events/zoom/main.vue preview %}
{% embed_file events/zoom/Logger.vue %}
{% embed_file events/zoom/main.js %}
{% endmeta %}

## Suggested Links

* [Get Started with the Chart]({% slug overview_charts %})
