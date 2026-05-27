---
title: Configuring Item Properties
page_title: Configuring Item Properties - Menu - Kendo UI for Vue
description: "Configure the text, URLs, icons, and styles for the Kendo UI for Vue Menu in Vue projects."
slug: itemproperties_menu
position: 2
---

# Configuring Item Properties

The Menu enables you to apply configuration options to its item properties.

* [Setting the item text](#toc-text)
* [Setting a URL](#toc-url)
* [Setting an icon](#toc-icon)
* [Setting styles and classes](#toc-styles-and-classes)
* [Disabling items](#toc-disabled-items)
* [Showing Separator Items](#toc-showing-separator-items)

## Text

You can set the text of the Menu items by using the [`text`]({% slug api_layout_menuitemmodel %}#toc-text) property.


{% meta height:150 %}
{% embed_file menu/items/properties/text/main.vue preview %}
{% embed_file menu/items/properties/text/main.js %}
{% endmeta %}


## URL

You can set the URL of the items by using the [`url`]({% slug api_layout_menuitemmodel %}#toc-url) property. The URL will be rendered as a `href` attribute on the item link.



{% meta height:150 %}
{% embed_file menu/items/properties/url/main.vue preview %}
{% embed_file menu/items/properties/url/main.js %}
{% endmeta %}


## Icon

You can specify the name of an [SVG icon]({% slug svgicon_list %}#toc-svg-icons-list) that will be rendered for the item by using the [`svgIcon`]({% slug api_layout_menuitemmodel %}#toc-svgicon) property.

{% meta %}
{% embed_file menu/items/properties/icon/main.vue preview %}
{% embed_file menu/items/properties/icon/main.js %}
{% endmeta %}

## Styles and Classes

You can set styles and classes to the items by using the [`cssStyle`]({% slug api_layout_menuitemmodel %}#toc-cssstyle) and [`cssClass`]({% slug api_layout_menuitemmodel %}#toc-cssclass) properties.

{% meta %}
{% embed_file menu/items/properties/styles/main.vue preview %}
{% embed_file menu/items/properties/styles/main.js %}
{% embed_file menu/items/properties/styles/styles.css %}
{% endmeta %}

## Disabled Items

You can specify that a Menu item is disabled by using the [`disabled`]({% slug api_layout_menuitemmodel %}#toc-disabled) property.

{% meta %}
{% embed_file menu/items/properties/disabled/main.vue preview %}
{% embed_file menu/items/properties/disabled/main.js %}
{% endmeta %}

## Showing Separator Items

You can specify a separator item by using the [`separator`]({% slug api_layout_menuitemmodel %}#toc-separator) property.

{% meta height:120 %}
{% embed_file menu/items/properties/separator/main.vue preview %}
{% embed_file menu/items/properties/separator/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
