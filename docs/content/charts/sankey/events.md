---
title: Events
description: "Learn how to handle the Kendo UI for Vue Sankey Chart events for hovering and clicking the nodes and links."
slug: events_sankey
position: 50
---

# Events

The Kendo UI for Vue Sankey diagram emits several events that you can handle. This allows you to tailor the Sankey's behavior to your specific requirements.

- [`onNodeenter`]({% slug api_charts_sankeyprops %}#toc-onnodeenter)&mdash;The event fires when the user enters a node.
- [`onNodeleave`]({% slug api_charts_sankeyprops %}#toc-onnodeleave)&mdash;The event fires when the user leaves a node.
- [`onLinkenter`]({% slug api_charts_sankeyprops %}#toc-onlinkenter)&mdash;The event fires when the user enters a link.
- [`onLinkleave`]({% slug api_charts_sankeyprops %}#toc-onlinkleave)&mdash;The event fires when the user leaves a link.
- [`onNodeclick`]({% slug api_charts_sankeyprops %}#toc-onnodeclick)&mdash;The event fires when the user clicks a node.
- [`onLinkclick`]({% slug api_charts_sankeyprops %}#toc-onlinkclick)&mdash;The event fires when the user clicks a link.

The following example demonstrates the above events. Test them by entering and leaving the nodes and links with your mouse or with a touch screen input.

{% meta height:335 %}
{% embed_file sankey/events/main.vue preview %}
{% embed_file sankey/events/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
