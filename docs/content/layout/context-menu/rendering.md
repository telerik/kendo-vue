---
title: Overriding the Default Rendering
page_title: Overriding Items Rendering - ContextMenu - Kendo UI for Vue
description: "Override the default rendering of the Kendo UI for Vue ContextMenu items in Vue projects."
slug: rendering_contextmenu
position: 34
---

# Overriding the Default Rendering

The ContextMenu enables you to override the default rendering of its items.

To customize the item rendering, use any of the following approaches:
* [Override the rendering of the innermost item part](#toc-items)
* [Override the rendering of the item link](#toc-links)
* [Set specific content for the item children](#toc-content)

## Items

By default, the innermost ContextMenu item part includes only text.

To override the rendering of that innermost item part, either:

* Override the innermost part for a specific item by using the [`render`]({% slug api_layout_menuitemmodel %}#toc-render) property.



{% meta height:270 %}
{% embed_file context-menu/items/rendering/item-render/main.vue preview %}
{% embed_file context-menu/items/rendering/item-render/main.js %}
{% endmeta %}


* Override the innermost part for all items by using the [`itemRender`]({% slug api_layout_menuprops %}#toc-itemrender) property of the ContextMenu.



{% meta height:270 %}
{% embed_file context-menu/items/rendering/menu-item-render/main.vue preview %}
{% embed_file context-menu/items/rendering/menu-item-render/main.js %}
{% endmeta %}


## Links

By default, the ContextMenu item link includes an icon, text, and an arrow.

To override the rendering of the item link, either:

* Override the item link for a specific item by using the [`linkRender`]({% slug api_layout_menuitemmodel %}#toc-linkrender) property.



{% meta height:270 %}
{% embed_file context-menu/items/rendering/link-render/main.vue preview %}
{% embed_file context-menu/items/rendering/link-render/main.js %}
{% endmeta %}


* Override the item link for all items by using the [`linkRender`]({% slug api_layout_menuprops %}#toc-linkrender) property of the ContextMenu.



{% meta height:270 %}
{% embed_file context-menu/items/rendering/menu-link-render/main.vue preview %}
{% embed_file context-menu/items/rendering/menu-link-render/main.js %}
{% endmeta %}


## Content

You can set specific content that will replace the children of a ContextMenu item by using the [`contentRender`]({% slug api_layout_menuitemmodel %}#toc-contentrender) property.

{% meta height:270 %}
{% embed_file context-menu/items/rendering/content-render/main.vue preview %}
{% embed_file context-menu/items/rendering/content-render/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
