---
title: Data Binding
description: "Bind the Kendo UI for Vue FloatingActionButton to data in Vue projects."
slug: databinding_floatingactionbutton
position: 2
---

# Data Binding

The FloatingActionButton items provide configuration options for handling their properties and overriding their default rendering. To render the FloatingActionButton items, use the [`items`]({% slug api_buttons_floatingactionbuttonprops %}#toc-items) FloatingActionButton property.

Тhe component can extract the `icon` and `text` values from the data items and thus set the icon and text of the items in the popup.

The following example demonstrates how to bind the FloatingActionButton to an array of objects:

{% meta height:250 %}
{% embed_file floatingactionbutton/items/databinding/main.vue preview %}
{% embed_file floatingactionbutton/items/databinding/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbuttonprops %})
* [API Reference of the FloatingActionButtonProps]({% slug api_buttons_floatingactionbuttonprops %})

