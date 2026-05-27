---
title: "Display Modes"
description: "Get started with the Kendo UI for Vue Native Drawer and set its overlay or push expand modes or its compact mini view in Vue projects."
slug: display_modes_drawer
position: 3
---

# Display Modes

The Kendo UI for Vue Native Drawer provides [expand modes](#toc-expand-modes) and a [compact mini view](#toc-mini-view).

## Expand Modes

For displaying its content, the Drawer provides the following expand modes:
- `"overlay"`&mdash;The Drawer expands on top of the container content and displays a grayed overlay over it. Use `onOverlayClick` event handler to handle when the overlay is clicked.
- `"push"`&mdash;The Drawer expands side by side to the container content by shrinking its width.

To configure the expand mode, use the [`mode`]({% slug api_layout_drawerprops %}#toc-mode) property of the Drawer.



{% meta height:500 %}
{% embed_file drawer/display-modes/main.vue preview %}
{% embed_file drawer/display-modes/main.js %}
{% endmeta %}


## Mini View

A compact view can be displayed when the Drawer is collapsed. To toggle between expanded and compact views, use its [`mini`]({% slug api_layout_drawerprops %}#toc-mode) property of the Drawer.

> The Drawer will always be visible displaying only the item icon even when collapsed.



{% meta height:500 %}
{% embed_file drawer/mini-mode/main.vue preview %}
{% embed_file drawer/mini-mode/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Drawer Props]({% slug api_layout_drawerprops %})
