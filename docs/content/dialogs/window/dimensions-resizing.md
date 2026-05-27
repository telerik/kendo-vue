---
title: Dimensions and Resizing
description: "Set the dimensions of the Kendo UI for Vue Native Window and manually resize the component by dragging its resize handles."
slug: dimensionsresizing_window
position: 5
---

# Dimensions and Resizing

The Kendo UI for Vue Native Window enables you to [set its initial width and height](#toc-dimensions), and change its dimensions by dragging the [resize handles](#toc-resizing).

## Dimensions

To define the dimensions of the Window, use its [`initialWidth`]({% slug api_dialogs_windowprops %}#toc-initialwidth) and [`initialHeight`]({% slug api_dialogs_windowprops %}#toc-initialheight) properties.

{% meta height:650 %}
{% embed_file window/dimensions/main.vue preview %}
{% embed_file window/dimensions/main.js %}
{% endmeta %}

## Resizing

By default, the Window enables you to resize it by dragging its edges (resize handles). To control this behavior, use the [`resizable`]({% slug api_dialogs_windowprops %}#toc-draggable) prop.

You can also control the minimum allowed dimensions of the Window by using the [`minWidth`]({% slug api_dialogs_windowprops %}#toc-minwidth) and [`minHeight`]({% slug api_dialogs_windowprops %}#toc-minheight) props.

{% meta height:650 %}
{% embed_file window/resizable/main.vue preview %}
{% embed_file window/resizable/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Window]({% slug api_dialogs_windowprops %})
