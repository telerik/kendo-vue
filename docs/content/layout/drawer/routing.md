---
title: Routing
description: "Use the Kendo UI for Vue Drawer with the Vue router."
slug: routing_drawer
position: 6
---

# Routing

You can use the Drawer as a container for a navigational components with any router library.

## Using Custom Properties to Set Route Paths

To use custom properties and set the route path:

1. Pass `route` custom property to the `items` collection.
1. Set the property to the corresponding path.
1. After the user makes a selection, identify the selected item and redirect the source.


{% meta height:600 %}
{% embed_file drawer/routing/main.vue preview %}
{% embed_file drawer/routing/main.js %}
{% embed_file drawer/routing/index.js %}
{% embed_file drawer/routing/styles.css %}
{% embed_file drawer/routing/Home.vue %}
{% embed_file drawer/routing/Products.vue %}
{% embed_file drawer/routing/About.vue %}
{% endmeta %}


## Suggested Links

* [API Reference of the DrawerProps]({% slug api_layout_drawerprops %})
* [API Reference of the DrawerItemProps]({% slug api_layout_draweritemprops %})


