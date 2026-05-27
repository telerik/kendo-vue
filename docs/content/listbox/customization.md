---
title: Customization
description: "Get started with the Kendo UI for Vue Native ListBox and learn how to customize it."
slug: customization_listbox
position: 4
---

# Customization

The Kendo UI for Vue Native ListBox enables you to customize its items, toolbar action buttons and the toolbar position.

## Custom Items

Utilize the [item]({% slug api_listbox_listboxprops %}#toc-item) prop of the ListBox component that allows to fully customize the rendering of the items. All required information is available inside the `props` and can be applied to the custom `li` element.

The following example demonstrates how to customize the ListBox items.



{% meta height:500 %}
{% embed_file customization/main.vue preview %}
{% embed_file customization/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}



## Suggested Links

* [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
* [API Reference of the ListBoxToolbar]({% slug api_listbox_listboxtoolbarprops %})
