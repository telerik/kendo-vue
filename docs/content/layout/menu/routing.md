---
title: Routing
description: "Use the Kendo UI for Vue Menu with the Vue router."
slug: routing_menu
position: 60
---

# Routing

You can use the Menu as a navigational component by wiring it with Vue Router or any router library.

1. Set the [`data`]({% slug api_layout_menuitemmodel %}#toc-data) property of each Menu item to the corresponding route path.
1. Upon the selection of a Menu item, read the route path from the [`data`]({% slug api_layout_menuitemmodel %}#toc-data) property and push it to `this.$router`.


{% meta height:600 %}
{% embed_file menu/routing/main.vue preview %}
{% embed_file menu/routing/index.js %}
{% embed_file menu/routing/main.js %}
{% embed_file menu/routing/About.vue %}
{% embed_file menu/routing/Home.vue %}
{% embed_file menu/routing/Products.vue %}
{% embed_file menu/routing/Team.vue %}
{% endmeta %}


## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
