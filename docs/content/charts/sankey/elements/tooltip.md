---
title: Tooltip
description: "Learn how to add a title to the Kendo UI for Vue Sankey Chart and customize its appearance and behavior"
slug: tooltip_sankey
position: 10
---

# Tooltip

The Sankey Chart has built-in tooltips that are displayed for the nodes and links when hovering them. This does not require any configurations and is handled by the component.

{% meta height:335 %}
{% embed_file sankey/elements/tooltip/default/main.vue preview %}
{% embed_file sankey/elements/tooltip/default/main.js %}
{% endmeta %}

## Customize Tooltip Behaviour

You can customize the tooltip behavior using the [`tooltip`]({% slug api_charts_sankeyprops %}#toc-tooltip) property. The following options are available:

- `offset`&mdash;Set the distance between the pointer and the tooltip.
- `visible`&mdash;Set whether the tooltip is displayed or not.
- `followPointer`&mdash;Set whether the tooltip follows the pointer or not.
- `delay`&mdash;Set the delay until the tooltip is displayed after hovering.

{% meta height:335 %}
{% embed_file sankey/elements/tooltip/custom-behaviour/main.vue preview %}
{% embed_file sankey/elements/tooltip/custom-behaviour/main.js %}
{% endmeta %}

## Render a Custom Tooltip

The [`tooltip`]({% slug api_charts_sankeyprops %}#toc-tooltip) property also provides additional options that allow you to customize the rendering of the tooltip element:

- `nodeContent`&mdash;Customize the content of the node tooltip.
- `linkContent`&mdash;Customize the content of the link tooltip.

{% meta height:335 %}
{% embed_file sankey/elements/tooltip/custom-rendering/main.vue preview %}
{% embed_file sankey/elements/tooltip/custom-rendering/main.js %}
{% embed_file sankey/elements/tooltip/custom-rendering/tooltip-link-content.vue %}
{% embed_file sankey/elements/tooltip/custom-rendering/tooltip-node-content.vue %}
{% endmeta %}


## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
