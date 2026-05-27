---
title: Icon FloatingActionButton
description: "Specify the content of the Kendo UI for Vue Native FloatingActionButton in Vue projects."
slug: icon_floatingactionbutton
position: 3
---

# Icon FloatingActionButton


The FloatingActionButton allows you to specify the visual content of the rendered button by adding predefined or custom icons to it.
It can display the button with an icon indicator, a text label, or a combination of both.

The FloatingActionButton provides options for using:
* [Built-in Kendo UI icons]({% slug icons %})&mdash;Use the [`icon`]({% slug api_buttons_floatingactionbuttonprops %}#toc-icon) property. To see the full list of the web font icons in Kendo UI, refer to the article on [styles and layout](slug:icons).
* FontAwesome and other font icons&mdash;Set the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_floatingactionbuttonprops %}#toc-iconclass) property of the component.
* Text labels&mdash;Use the [`text`]({% slug api_buttons_floatingactionbuttonprops %}#toc-text) property of the component.

The following example demonstrates how to display an icon, an icon with some text, and only some text in the FloatingActionButton.

{% meta height:150 %}
{% embed_file floatingactionbutton/icons/main.vue preview %}
{% embed_file floatingactionbutton/icons/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbuttonprops %})
