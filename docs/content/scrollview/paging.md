---
title: Paging
description: "Configure the paging options of the Kendo UI for Vue Native ScrollView in Vue projects."
slug: paging_scrollview
position: 3
---

# Paging

The ScrollView allows you to enable or disable its built-in paging functionality.

To control the paging, use the [`pageable`]({% slug api_scrollview_scrollviewprops %}#toc-pageable) property. By default, `pageable` is set to `true`.

{% meta  height:590 %}
{% embed_file paging/main.vue preview %}
{% embed_file paging/main.js %}
{% embed_file paging/styles.css %}
{% endmeta %}

## Pager Overlay

To add an overlay to the pager use the [`pagerOverlay`]({% slug api_scrollview_scrollviewprops %}#toc-pageroverlay) property. By default it is set to `none` and there is no overlay applied to the pager.

{% meta  height:610 %}
{% embed_file pager-overlay/main.vue preview %}
{% embed_file pager-overlay/main.js %}
{% embed_file pager-overlay/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})
* [API Reference of the ScrollViewProps]({% slug api_scrollview_scrollview %})
