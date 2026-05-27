---
title: Panning and Zooming
description: "Enable panning and zooming for the Kendo UI for Vue Chart in Vue projects."
slug: panzoom_chart_charts
position: 7
---

# Panning and Zooming

The Chart enables the user to change the displayed range by panning and zooming.

Panning is performed by dragging over the plot area.

Zooming is performed by either:
* Mouse-wheeling on desktop or pinch zoom on mobile, or
* Holding the `Shift` key and selecting an area.

To enable the pan-and-zoom functionality, use the [`pannable`]({% slug api_charts_chartprops %}#toc-pannable) and [`zoomable`]({% slug api_charts_chartprops %}#toc-zoomable) options.

{% meta height:465 %}
{% embed_file chart/pan-zoom/basic/main.vue preview %}
{% embed_file chart/pan-zoom/basic/main.js %}
{% endmeta %}

## Disabling Pan-and-Zoom Direction

You can prevent panning and zooming for an axis by using the `lock` configuration. To disable pan-and-zoom in the vertical direction, set the `pannable.lock`, `zoomable.mouoswheel.lock`, and `zoomable.selection.lock` options to `'y'`. To disable pan-and-zoom in the horizontal direction, set the `pannable.lock`, `zoomable.mouoswheel.lock`, and `zoomable.selection.lock` options to `'x'`.

{% meta height:500 %}
{% embed_file chart/pan-zoom/lock/main.vue preview %}
{% embed_file chart/pan-zoom/lock/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Chart]({% slug api_charts %})
* [Glossary]({% slug glossary_charts %})
