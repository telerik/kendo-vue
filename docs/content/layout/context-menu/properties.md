---
title: Item Properties
page_title: Configuring Item Properties - ContextMenu - Kendo UI for Vue
description: "Configure the text, URLs, icons, and styles for the Kendo UI for Vue ContextMenu in Vue projects."
slug: itemproperties_contextmenu
position: 33
---

# Configuring Item Properties

The ContextMenu enables you to apply configuration options to its item properties.

* [Setting the item text](#toc-text)
* [Setting a URL](#toc-url)
* [Setting an icon](#toc-icon)
* [Setting styles and classes](#toc-styles-and-classes)
* [Disabling items](#toc-disabled-items)

## Text

You can set the text of the ContextMenu items by using the [`text`]({% slug api_layout_menuitemmodel %}#toc-text) property.


{% meta height:270 %}
{% embed_file context-menu/items/properties/text/main.vue preview %}
{% embed_file context-menu/items/properties/text/main.js %}
{% endmeta %}


## URL

You can set the URL of the items by using the [`url`]({% slug api_layout_menuitemmodel %}#toc-url) property. The URL will be rendered as a `href` attribute on the item link.



{% meta height:270 %}
{% embed_file context-menu/items/properties/url/main.vue preview %}
{% embed_file context-menu/items/properties/url/main.js %}
{% endmeta %}


## Icon

You can specify the name of an [SVG icon]({% slug svgicon_list %}#toc-svg-icons-list) that will be rendered for the item by using the [`svgIcon`]({% slug api_layout_menuitemmodel %}#toc-svgicon) property.

{% meta height:270 %}
{% embed_file context-menu/items/properties/icon/main.vue preview %}
{% embed_file context-menu/items/properties/icon/main.js %}
{% endmeta %}

## Styles and Classes

You can set styles and classes to the items by using the [`cssStyle`]({% slug api_layout_menuitemmodel %}#toc-cssstyle) and [`cssClass`]({% slug api_layout_menuitemmodel %}#toc-cssclass) properties.

{% meta height:270 %}
{% embed_file context-menu/items/properties/styles/main.vue preview %}
{% embed_file context-menu/items/properties/styles/main.js %}
{% endmeta %}

## Disabled Items

You can specify that a ContextMenu item is disabled by using the [`disabled`]({% slug api_layout_menuitemmodel %}#toc-disabled) property.

{% meta height:270 %}
{% embed_file context-menu/items/properties/disabled/main.vue preview %}
{% embed_file context-menu/items/properties/disabled/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
