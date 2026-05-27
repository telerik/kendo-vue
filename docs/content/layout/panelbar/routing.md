---
title: Routing
description: "Use the Kendo UI for Vue Native PanelBar with the Vue router."
slug: routing_panelbar
position: 9
---

# Routing

You can use the PanelBar as a navigational component with any router library.

## Using Custom Properties to Set Route Paths

To use custom properties and set the route path:

1. Apply а [custom]({% slug customproperty_panelbar %}) property to each `PanelBar` item.
1. Set the property to the corresponding path.
1. After the user makes a selection, identify the selected `PanelBar` item by its `custom` property and redirect the source.

{% meta height:600 %}
{% embed_file panelbar/routing/main.vue preview %}
{% embed_file panelbar/routing/main.js %}
{% embed_file panelbar/routing/About.vue %}
{% embed_file panelbar/routing/Products.vue %}
{% embed_file panelbar/routing/Home.vue %}
{% embed_file panelbar/routing/Team.vue %}
{% embed_file panelbar/routing/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
