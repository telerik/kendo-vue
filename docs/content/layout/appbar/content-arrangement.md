---
title: Content Arrangement
description: "Learn how to arrange the content of the Kendo UI for Vue Native AppBar component."
slug: contentarrangement_appbar
position: 3
---

# Content Arrangement
The AppBar allows you to control the layout of its content by using specific container components. With these container components, the content of the AppBar can be separated into `sections` detached from one another by `separators` or `spacings`.

The supported layout containers that can be used inside the AppBar are:

* [Sections](#toc-sections)
* [Spacings](#toc-spacings)
* [Separators](#toc-separators)


## Sections

The [`AppBarSection`]({% slug api_layout_appbarsectionprops %}) component allows you to place HTML elements or Vue components between its tags. AppBar sections provide a better layout structure, alignment styling and control over the content arrangement.

The following example demonstrates the [`AppBarSection`]({% slug api_layout_appbarsectionprops %}) component in action.



{% meta height:120 %}
{% embed_file appbar/sections/main.vue preview %}
{% embed_file appbar/sections/main.js %}
{% endmeta %}


## Spacings

To define spacings between tha AppBar sections, you can use the [`AppBarSpacer`]({% slug api_layout_appbarspacerprops %}), which gives an additional white space in the content layout. You can customize the width of the spacing by setting width CSS rule inside [`style`]({% slug api_layout_appbarspacerprops %}#toc-style) property. If not set, the spacer element will take all the available space.


{% meta height:120 %}
{% embed_file appbar/spacings/main.vue preview %}
{% embed_file appbar/spacings/main.js %}
{% endmeta %}


## Separators

Separators are used to create a visual separation of the AppBar content. To add a separator, add the `k-appbar-separator` class on a `span` element.

```html
    <span :class="'k-appbar-separator'" />
```
Here is an example demonstrating how the separator can be implemented in the AppBar. 

{% meta height:120 %}
{% embed_file appbar/separators/main.vue preview %}
{% embed_file appbar/separators/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the AppBarSection]({% slug api_layout_appbarsectionprops %})
* [API Reference of the AppBarSpacer]({% slug api_layout_appbarspacerprops %})
* [API Reference of the AppBar]({% slug api_layout_appbarprops %})
