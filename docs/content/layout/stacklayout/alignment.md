---
title: Alignment
description: "Learn how to align horizontally and vertically the content inside the Native StackLayout component part of the Kendo UI for Vue Native suite."
slug: layout_stacklayout_alignment
position: 4
---

# StackLayout Alignment

The StackLayout provides multiple options by which you can control the [Horizontal](#toc-horizontal-alignment) or [Vertical](#toc-vertical-alignment) alignment of the content displayed inside the component. 

## Horizontal Alignment

To set the StackLayout horizontal alignment, use the [`align`]({% slug api_layout_stacklayoutprops %}#toc-align) property. The `horizontal` key controls the alignment of the inner elements based on the X axis.

The available values are:
- `start`&mdash;Uses the start point of the container.
- `center`&mdash;Uses the central point of the container.
- `end`&mdash;Uses the end point of the container.
- (Default)`stretch`&mdash;Stretches the items to fill the width of the container.

{% meta height:650 %}
{% embed_file stacklayout/horizontalalign/main.vue preview %}
{% embed_file stacklayout/horizontalalign/main.js %}
{% embed_file stacklayout/horizontalalign/styles.css %}
{% endmeta %}

## Vertical alignment

To set the StackLayout vertical alignment, use the [`align`]({% slug api_layout_stacklayoutprops %}#toc-align) property. The `vertical` key controls the alignment of the inner elements based on the Y axis.

The available values are:
- `top`&mdash;Uses the top point of the container.
- `middle`&mdash;Uses the middle point of the container.
- `bottom`&mdash;Uses the bottom point of the container.
- (Default)`stretch`&mdash;Stretches the items to fill the height of the container.

{% meta height:650 %}
{% embed_file stacklayout/verticalalign/main.vue preview %}
{% embed_file stacklayout/verticalalign/main.js %}
{% embed_file stacklayout/verticalalign/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the StackLayoutProps]({% slug api_layout_stacklayoutprops %})
