---
title: Appearance
description: The Kendo UI for Vue Tabstrip allows you to set different styles based on its content."
slug: appearance_tabstrip
position: 25
---

# Sizing

The TabStrip provides predefined options which allow you to set different `padding` to its building blocks (e.g. tabs and scroll buttons).

To change the default padding of the TabStrip elements, set the [`size`]({% slug api_layout_tabstripprops %}#toc-size) property of the component.

The [`size`]({% slug api_layout_tabstripprops %}#toc-size) property support the following values from type [TabStripSize]({% slug api_layout_tabstripsize %}):

* `small`&mdash;Reduces the default `padding` of the building blocks of the TabStrip. Especially useful when you want to fit more tabs in a limited space.
* `medium`&mdash;Represents the default `padding` of the building blocks of the TabStrip.
* `large`&mdash;Increases the default `padding` of the building blocks of the TabStrip. Useful when you want to provide larger elements for easier end user interaction.

The following example demonstrates how to define the TabStrip size.

{% meta height:450 %}
{% embed_file tabstrip/size/main.vue preview %}
{% embed_file tabstrip/size/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
* [API Reference of the TabStripTabProperties]({% slug api_layout_tabstriptabproperties %})
