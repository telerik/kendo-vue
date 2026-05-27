---
title: Automatic Scrolling
description: "Enable or disable the built-in automatic scroll or configure it's default interval of the Kendo UI for Vue Native ScrollView in Vue projects."
slug: automatic_scrolling_scrollview
position: 5
---


# Automatic Scrolling

To implement an automatic scrolling, use the [`automaticViewChange`]({% slug api_scrollview_scrollviewprops %}#toc-automaticviewchange) property of the ScrollView. By default, `automaticViewChange` is set to `true`.

{% meta  height:460 %}
{% embed_file automatic-scrolling/main.vue preview %}
{% embed_file automatic-scrolling/main.js %}
{% embed_file automatic-scrolling/styles.css %}
{% endmeta %}

## Configure Automatic Scrolling Interval

The ScrollView allows you to configure the view change interval via [`automaticViewChangeInterval`]({% slug api_scrollview_scrollviewprops %}#toc-automaticviewchangeinterval). By default, the interval is `5000` milliseconds.


{% meta  height:460 %}
{% embed_file automatic-interval/main.vue preview %}
{% embed_file automatic-interval/main.js %}
{% embed_file automatic-interval/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})
* [API Reference of the ScrollViewProps]({% slug api_scrollview_scrollview %})


