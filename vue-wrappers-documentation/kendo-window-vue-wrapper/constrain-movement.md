---
title: Constrain Movement
page_title: Constrain Movement - Window - Kendo UI for Vue
description: "Set the containment element of the Kendo UI Window wrapper."
slug: constrain_movement_window_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/window/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/window"></WrapperBanner></div>    

# Constrain Movement

The `draggable-containment` prop defines the selector of an element in which the window will be able to move. The element must have sufficient dimensions to contain the window. Accepts a selector. The Window element is appended to the containment element. Thus, the appendTo setting gets overridden.

The `draggable-axis` prop constrains the dragging to horizontal (x) or vertical (y) axis. Accepts two possible values: "x", "y".

The `draggable-dragHandle` prop restricts dragging of the window from the specified element. It should be part of the window element. Accepts a selector.

{% meta height:660 %}
{% embed_file constrain/main.vue preview %}
{% embed_file constrain/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/window/overview)
* [API Reference of the Window Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/window)
