---
title: Default Item
description: "Configure the default item of the Kendo UI for Vue Native DropDownList in Vue projects."
slug: defaultitem_dropdownlist
position: 30
---

# Default Item

The Kendo UI for Vue Native DropDownList enables you to configure its default item.

> The [`defaultItem`]({% slug api_dropdowns_dropdownlistprops %}#toc-defaultitem) property type has to match the data type. For example, if the [`dataItems`]({% slug api_dropdowns_dropdownlistprops %}#toc-dataitems) property contains a list of objects, the `defaultItem` has to be defined as an object with the same [`textField`]({% slug api_dropdowns_dropdownlistprops %}#toc-textfield) as the data items.

The following example demonstrates how to define a `defaultItem` as a primitive value.

{% meta height:350 %}
{% embed_file dropdownlist/default-item/basic/main.vue preview %}
{% embed_file dropdownlist/default-item/basic/main.js %}
{% endmeta %}

The following example demonstrates how to define a `defaultItem` as an object value.

{% meta height:350 %}
{% embed_file dropdownlist/default-item/object-values/main.vue preview %}
{% embed_file dropdownlist/default-item/object-values/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
