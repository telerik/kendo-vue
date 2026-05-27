---
title: Routing
description: "Use the Kendo UI for Vue Breadcrumb with the Vue router."
slug: routing_breadcrumb
position: 5
---

# Routing

You can use the Breadcrumb as a container for a navigational components with any router library.

## Using Custom Properties to Set Route Paths

To use custom properties and set the route path:

1. Pass `route` custom property to the `items` collection.
1. Set the property to the corresponding path.
1. After the user makes a selection, identify the selected item and redirect the source.

{% meta height:600 %}
{% embed_file breadcrumb/routing/main.vue preview %}
{% embed_file breadcrumb/routing/main.js %}
{% embed_file breadcrumb/routing/About.vue %}
{% embed_file breadcrumb/routing/Products.vue %}
{% embed_file breadcrumb/routing/Home.vue %}
{% embed_file breadcrumb/routing/Team.vue %}
{% embed_file breadcrumb/routing/styles.css %}
{% endmeta %}


## Suggested Links

-   [API Reference of the Breadcrumb]({% slug api_layout_breadcrumbprops %})
