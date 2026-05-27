---
title: Scroll Modes
description: "Get started with the endless scrolling functionality of the Kendo UI for Vue Native ListView and learn how to load more items dynamically."
slug: scrolling_listview
position: 30
---

# Scroll Modes

By default, the `height` of the ListView depends on its content and its `width` is determined by the available space or parent DOM element. To enable scrolling, you should define a fixed height that is less than the height of the ListView content. 

The ListView provides two types of scrolling modes:
* [Default Scrolling](#toc-default-scrolling) - Suitable for scenarios with a smaller number of data items. In this mode, all ListView data items are pre-rendered.
* [Endless Scrolling](#toc-endless-scrolling) - Suidable for scenarios with a lot of data. In this mode, all component's items are dynamically loaded based on the user's scrolling.

## Default Scrolling 

The following example demonstrates the ListView's default scrolling mode in action. In this scenario, the `height` and `width` of the component are set with an inline style but the same can be implemented through a custom CSS class.

{% meta height:500 %}
{% embed_file default-scrolling/main.vue preview %}
{% embed_file default-scrolling/main.js %}
{% embed_file default-scrolling/images.js %}
{% embed_file default-scrolling/employees.js %}
{% endmeta %}

## Endless Scrolling
The Kendo UI for Vue Native ListView can achieve `endless scrolling` allowing to dynamically display large collection of items.

The following example demonstrates the ListView that dynamically adds more items while the user scrolls, using the [onScroll event]({% slug api_listview_listviewprops %}#toc-onScroll).

{% meta height:600 %}
{% embed_file endless-scrolling/main.vue preview %}
{% embed_file endless-scrolling/main.js %}
{% embed_file shared/destinations.json %}
{% endmeta %}

## Suggested Links

* [ListView Paging]({% slug paging_listview %})
* [API Reference of the ListView]({% slug api_listview_listviewprops %})
