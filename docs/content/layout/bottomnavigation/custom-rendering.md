---
title: "Custom Rendering"
description: "Customize the Kendo UI for Vue Native BottomNavigation items in Vue projects."
slug: custom_rendering_bottomnavigation
position: 6
---

# Custom Rendering

The BottomNavigation enables you to override its default rendering by using the following options:
* [Item property of the BottomNavigation items](#toc-item-property)
* [ItemRender property of the BottomNavigation component](#toc-item-render-property)

## Item Property

To customize the appearance of the BottomNavigation items, you can use the [`item`]({% slug api_layout_bottomnavigationprops %}#toc-item) property of its items.

The following example demonstrates how to add additional components in the BottomNavigation items such as `FloatingActionButton` and `Badge`:


{% meta height:700 %}
{% embed_file bottomnavigation/custom-rendering/main.vue preview %}
{% embed_file bottomnavigation/custom-rendering/main.js %}
{% endmeta %}


## Item Render Property

To override the default rendering of all ButtonNavigation items, you can use the [`itemRender`]({% slug api_layout_bottomnavigationprops %}#toc-itemRender) property of the component.


{% meta height:300 %}
{% embed_file bottomnavigation/item-render/main.vue preview %}
{% embed_file bottomnavigation/item-render/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
* [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})



