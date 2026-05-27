---
title: Custom Rendering
description: "Enable the rendering customization of the Kendo UI for Vue DropDownTree in Vue projects."
slug: customrendering_dropdowntree
position: 30
---

# Custom Rendering

The DropDownTree provides options for customizing the way it renders its elements.

## Items and Value element

To customize the content of each option list item, use the [`item`]({% slug api_dropdowns_dropdowntreeprops %}#toc-item) prop. To customize the element content that holds the selected text, use the [`value-render`]({% slug api_dropdowns_dropdowntreeprops %}#toc-valuerender) prop.

The following example demonstrates how to customize the list elements and the element that holds the selected text.


{% meta height:520 %}
{% embed_file dropdowntree/item-template/main.vue preview %}
{% embed_file dropdowntree/item-template/main.js %}
{% embed_file dropdowntree/item-template/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


## Header and Footer

To customize the content of the header and footer, use the [`header`]({% slug api_dropdowns_dropdowntreeprops %}#toc-header) and [`footer`]({% slug api_dropdowns_dropdowntreeprops %}#toc-footer) prop.


{% meta height:400 %}
{% embed_file dropdowntree/header-footer/main.vue preview %}
{% embed_file dropdowntree/header-footer/main.js %}
{% embed_file shared/tree-data-operations.js %}
{% embed_file shared/tree-data.js %}
{% endmeta %}

## No Data

To customize the content of the option list when no data is present, use the [`listNoData`]({% slug api_dropdowns_dropdowntreeprops %}#toc-listnodata) prop.

{% meta height:250 %}
{% embed_file dropdowntree/no-data/main.vue preview %}
{% embed_file dropdowntree/no-data/main.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
