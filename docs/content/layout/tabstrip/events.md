---
title: Events
page_title: Kendo UI for Vue Native TabStrip Component Events | Kendo UI for Vue Native
description: "Get started with the Kendo UI for Vue Native TabStrip component and use its events in Vue projects."
slug: tabstrip_events
position: 79
---
# Events

The TabStrip emits the [`select`]({% slug api_layout_tabstripemits %}#toc-select) event.

## Handling the Events

To process the selection in the TabStrip component, handle the `select` event that exposes the `selected` value, necessary for changing the tab selection.

The `select` event is triggered each time the user makes a tab selection. 

{% meta height:830 %}
{% embed_file tabstrip/events/main.vue preview %}
{% embed_file tabstrip/events/main.js %}
{% embed_file tabstrip/events/Logger.vue %}
{% endmeta %}


## Suggested Links

* [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
* [API Reference of the TabStripTabProperties]({% slug api_layout_tabstriptabproperties %})