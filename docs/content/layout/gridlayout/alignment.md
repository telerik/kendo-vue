---
title: Alignment
description: "Get started with the Kendo UI for Vue Native GridLayout and learn how to horizontally and vertically align its items."
slug: layout_gridlayout_alignment
position: 4
---

# GridLayout Alignment

The GridLayout component provides options for controlling the alignment of its items. Check the following links for more details.

* [Horizontal alignment](#toc-horizontal-alignment)
* [Vertical alignment](#toc-vertical-alignment)

## Horizontal alignment

To set the GridLayout horizontal alignment, use the [`align`]({% slug api_layout_gridlayoutprops %}#toc-align) property. The `horizontal` key controls the alignment of the inner elements based on the X axis.

The available values are:
- `start`&mdash;Uses the start point of the container.
- `center`&mdash;Uses the central point of the container.
- `end`&mdash;Uses the end point of the container.
- (Default)`stretch`&mdash;Stretches the items to fill the width of the container.

{% meta height:620 %}
{% embed_file gridlayout/layout/horizontalalign/main.vue preview %}
{% embed_file gridlayout/layout/horizontalalign/main.js %}
{% embed_file gridlayout/layout/horizontalalign/styles.css %}
{% endmeta %}

## Vertical alignment

To set the GridLayout horizontal alignment, use the [`align`]({% slug api_layout_gridlayoutprops %}#toc-align) property. The `vertical` key controls the alignment of the inner elements based on the Y axis.

The available values are:
- `top`&mdash;Uses the top point of the container.
- `middle`&mdash;Uses the middle point of the container.
- `bottom`&mdash;Uses the bottom point of the container.
- (Default)`stretch`&mdash;Stretches the items to fill the height of the container.

{% meta height:620 %}
{% embed_file gridlayout/layout/verticalalign/main.vue preview %}
{% embed_file gridlayout/layout/verticalalign/main.js %}
{% embed_file gridlayout/layout/verticalalign/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the GridLayoutProps]({% slug api_layout_gridlayoutprops %})
