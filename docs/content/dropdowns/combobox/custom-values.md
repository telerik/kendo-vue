---
title: Custom Values
description: "Use custom values with the Kendo UI for Vue Native ComboBox component in Vue projects."
slug: custom_values_combobox
position: 30
---

# Custom Values

The Kendo UI for Vue Native ComboBox supports the implementation of custom values.  

By default, the ComboBox dismisses values that do not appear in the supplied list of items when the user presses `Enter` or when the component loses focus. To configure the ComboBox to accept custom values, set the [`allowCustom`]({% slug api_dropdowns_comboboxprops %}#toc-allowcustom) property to `true`.

## Primitive Values

If you bind the component to primitive values, set the [`allowCustom`]({% slug api_dropdowns_comboboxprops %}#toc-allowcustom) property to `true`.

The following example demonstrates how to allow custom primitive values.

{% meta height:350 %}
{% embed_file combobox/custom-values/primitive/main.vue preview %}
{% embed_file combobox/custom-values/primitive/main.js %}
{% endmeta %}

## Object Values

The following example demonstrates how to allow custom object values.

{% meta height:350 %}
{% embed_file combobox/custom-values/object/main.vue preview %}
{% embed_file combobox/custom-values/object/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
