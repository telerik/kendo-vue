---
title: Controlled Window
description: "Control the state, dimensions, and position of the Kendo UI for Vue Native Window in Vue projects."
slug: controlled_mode_window
position: 2
---

# Controlled Window

By default, the Kendo UI for Vue Native Window is in an uncontrolled state and can be resized or moved depending on its internal logic.

The Window provides options for:

* Controlling its state by handling the [`move`]({% slug api_dialogs_windowprops %}#toc-onmove) and [`resize`]({% slug api_dialogs_windowprops %}#toc-onresize) events.
* Controlling its dimensions by using the [`width`]({% slug api_dialogs_windowprops %}#toc-width) and [`height`]({% slug api_dialogs_windowprops %}#toc-height) properties.
* Controlling its position by using the [`left`]({% slug api_dialogs_windowprops %}#toc-left) and [`top`]({% slug api_dialogs_windowprops %}#toc-top) properties.

The following example demonstrates how to control the Window functionality.

{% meta height:450 %}
{% embed_file window/controlled/main.vue preview %}
{% embed_file window/controlled/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Window]({% slug api_dialogs_windowprops %})
