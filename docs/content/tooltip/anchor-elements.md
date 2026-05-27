---
title: Anchor Elements
description: "Filter the possible target elements and define the anchors which will render a Kendo UI for Vue Native Tooltip."
slug: filter_elements_tooltip
position: 3
---

# Anchor Elements

You can target specific anchor elements which will render a tooltip.

To determine which anchor elements will display a tooltip, use the [`filter`]({% slug api_tooltip_tooltipprops %}#toc-filter) callback function. `filter` accesses the target elements and enables you to filter the anchors based on various criteria such as titles, classes, id, and so on.

The following example demonstrates how to show a tooltip based on the element type.



{% meta height:200 %}
{% embed_file filters/main.vue preview %}
{% embed_file filters/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Tooltip]({% slug api_tooltip %})
