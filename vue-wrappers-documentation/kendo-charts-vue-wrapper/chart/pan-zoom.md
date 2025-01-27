---
title: Panning and Zooming
page_title: Panning and Zooming - Chart - Kendo UI for Vue
description: "Enable panning and zooming for the Kendo UI Chart in Vue projects."
slug: pan_and_zoom_chart_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/chart/pan-zoom/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts/chart/pan-zoom"></WrapperBanner></div>

# Panning and Zooming

The Chart enables the user to view specific ranges by applying panning and zooming to the component.

To enable panning, set the `pannable` option. You can also lock the X or Y axis by setting the nested `lock` attribute.

To enable zooming, set the `zoomable` option. You can also fine-tune the mouse-wheel and selection during zooming by setting the nested `mousewheel` and `selection` properties.

The following example demonstrates how to zoom in data for a specific period of time by using the `SHIFT` key and by mouse-dragging the **Region Selection** on mouse-enabled devices. To zoom in and out, use the mouse-wheel.

{% meta height:500 %}
{% embed_file chart/panning-and-zooming/main.vue preview %}
{% embed_file chart/panning-and-zooming/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
