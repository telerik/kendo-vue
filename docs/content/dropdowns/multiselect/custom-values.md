---
title: Custom Values
description: "Use custom values with the Kendo UI for Vue Native MultiSelect component in Vue projects."
slug: custom_values_multiselect
position: 30
---

# Custom Values

The MultiSelect supports the implementation of custom values.

To configure the Kendo UI for Vue MultiSelect to accept custom values, set the [`allowCustom`]({% slug api_dropdowns_multiselectprops %}#toc-allowcustom) property to `true`. To insert a custom value, type a random value in the MultiSelect and confirm it by pressing `Enter`.

## Primitive Values

The following example demonstrates how you can allow custom values when binding the MultiSelect to an array of primitive values.

{% meta height:400 %}
{% embed_file multiselect/allow-custom-values/main.vue preview %}
{% embed_file multiselect/allow-custom-values/main.js %}
{% endmeta %}

## Object Values

The following example shows how you can allow custom values when binding the MultiSelect to a dataset of objects.

{% meta height:400 %}
{% embed_file multiselect/allow-custom-object-data/main.vue preview %}
{% embed_file multiselect/allow-custom-object-data/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
