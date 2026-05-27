---
title: Data Binding
description: "Bind your data in Kendo UI for Vue ChipList."
slug: databinding_chiplist
position: 4
---

# Data Binding

Allows you to bind your own data.

The Kendo UI for Vue ChipList has [`textField`]({% slug api_buttons_chiplistprops %}#toc-textField) and [`valueField`]({% slug api_buttons_chiplistprops %}#toc-valueField) props which you can set. The default value of the `textField` is equal to `text` and the default value of the `valueField` is set to `value`. This values represent the keys in key-value pairs of the [`dataItems`]({% slug api_buttons_chiplistprops %}#toc-dataitems) or [`defaultDataItems`]({% slug api_buttons_chiplistprops %}#toc-defaultdataitems) object which is given to the ChipList component. You can use different key-value pairs to represent the `text` and `value` pair into your data object. The below example represents the behavior.

{% meta height:130 %}
{% embed_file chiplist/data-binding/main.vue preview %}
{% embed_file chiplist/data-binding/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
