---
title: Panes
description: "Use the configuration options of the Splitter panes and set their dimensions as well as their resize, collapsing, and scrolling behavior in Vue projects."
slug: panes_splitter
position: 3
---

# Panes

The Splitter provides options for setting the behavior of its panes.

By using these options, you can configure the following pane features:

* [Dimensions](#toc-dimensions)
* [Resizing](#toc-resizing)
* [Collapsing](#toc-collapsing)
* [Scrolling](#toc-scrolling)

## Dimensions

The [`size`]({% slug api_layout_splitterpaneprops %}#toc-size) property controls the dimensions of the Splitter panes. It accepts units in both pixel and percentage values. To control the minimum and maximum size of a pane, use the [`min`]({% slug api_layout_splitterpaneprops %}#toc-min) and [`max`]({% slug api_layout_splitterpaneprops %}#toc-max) properties of the Splitter [`panes`]({% slug api_layout_splitterprops %}#toc-panes) option.

To allow the Splitter to fully and evenly distribute the available space between panes of non-declared size, do not specify the size of at least one pane. Otherwise, if you declare `size` for all panes, the Splitter will throw an error.

{% meta height:400 %}
{% embed_file splitter/panes/dimensions/main.vue preview %}
{% embed_file splitter/panes/dimensions/main.js %}
{% embed_file splitter/panes/dimensions/styles.css %}
{% endmeta %}

## Resizing

By default, the Splitter enables the user to resize its panes. To disable this behavior, set the [`resizable`]({% slug api_layout_splitterpaneprops %}#toc-resizable) property to `false`.

{% meta height:400 %}
{% embed_file splitter/panes/resizing/main.vue preview %}
{% embed_file splitter/panes/resizing/main.js %}
{% embed_file splitter/panes/resizing/styles.css %}
{% endmeta %}

## Collapsing

You can enable a Splitter pane to collapse by setting the [`collapsible`]({% slug api_layout_splitterpaneprops %}#toc-collapsible) property to `true`. As a result, the Splitter renders a button which shows or, respectively, hides the pane. To collapse a pane, you can also double-click the split-bar. To render a pane that is initially collapsed, use the [`collapsed`]({% slug api_layout_splitterpaneprops %}#toc-collapsed) property.

{% meta height:400 %}
{% embed_file splitter/panes/collapsing/main.vue preview %}
{% embed_file splitter/panes/collapsing/main.js %}
{% embed_file splitter/panes/collapsing/styles.css %}
{% endmeta %}

## Scrolling

By default, the content of the Splitter panes is scrollable. To disable the scrolling feature, set the [`scrollable`]({% slug api_layout_splitterpaneprops %}#toc-scrollable) property to `false`.


{% meta height:400 %}
{% embed_file splitter/panes/scrolling/main.vue preview %}
{% embed_file splitter/panes/scrolling/main.js %}
{% embed_file splitter/panes/scrolling/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the Splitter]({% slug api_layout_splitterprops %})
* [API Reference of the SplitterPaneComponent]({% slug api_layout_splitterpaneprops %})
