---
title: Custom operators
page_title: Kendo UI for Vue Native Filter Component Template | Kendo UI for Vue Native
description: 'Get started with the Kendo UI for Vue Native Filter and use custom filter operators.'
slug: filter_custom_operators
position: 20
---

# Custom Operators

The `Filter` gives you the freedom to modify the different Filter operators. When you need to change the name of a given `Filter` operator or when you don't need all default operators available of given data type, you can just define what you need.

The below example demonstrates two approaches for re-definition of the default operators. The first uses the [`Operator` object]({% slug api_data-tools_operators %}) provided by the `@progress/kendo-vue-data-tools` package and the other uses hard-coded operators.

{% meta height:860 %}
{% embed_file filter/custom-operators/main.vue preview %}
{% embed_file filter/custom-operators/main.js %}
{% embed_file filter/custom-operators/products.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the Filter Props]({% slug api_data-tools_filterprops %})
