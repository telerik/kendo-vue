---
title: Custom Rendering
description: "Customize the Kendo UI for Vue Drawer to show and hide details by expanding and collapsing items vertically."
slug: custom_rendering
position: 7
---

# Custom Rendering

The Drawer enables you to customize the content of its items.

To customize the appearance of the items, use the [`item`]({% slug api_layout_drawerprops %}#toc-item) property of the Drawer.

The following example demonstrates how to customize the look and feel of the drawer items.

## Items



{% meta height:400 %}
{% embed_file drawer/custom-render/main.vue preview %}
{% embed_file drawer/custom-render/index.js %}
{% embed_file drawer/custom-render/main.js %}
{% embed_file drawer/custom-render/Berlin.vue %}
{% embed_file drawer/custom-render/Madrid.vue %}
{% embed_file drawer/custom-render/Paris.vue %}
{% embed_file drawer/custom-render/Rome.vue %}
{% embed_file drawer/custom-render/styles.css %}
{% endmeta %}


## Hierarchical Drawer

The Drawer component works with a flat structure of items by design. However many real world scenarios require a navigation with hierarchical structure.

The following example demonstrates how to achieve this by toggling the visibility of the Drawer items depending on the currently selected item.



{% meta height:600 %}
{% embed_file drawer/hierarchical/main.vue preview %}
{% embed_file drawer/hierarchical/index.js %}
{% embed_file drawer/hierarchical/main.js %}
{% embed_file drawer/hierarchical/Education.vue %}
{% embed_file drawer/hierarchical/Europe.vue %}
{% embed_file drawer/hierarchical/Food.vue %}
{% embed_file drawer/hierarchical/ItalianFood.vue %}
{% embed_file drawer/hierarchical/JapaneseFood.vue %}
{% embed_file drawer/hierarchical/NorthAmerica.vue %}
{% embed_file drawer/hierarchical/Travel.vue %}
{% embed_file drawer/hierarchical/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the DrawerProps]({% slug api_layout_drawerprops %})
* [API Reference of the DrawerItemProps]({% slug api_layout_draweritemprops %})


