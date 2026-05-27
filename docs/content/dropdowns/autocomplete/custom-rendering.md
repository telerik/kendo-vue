---
title: Custom Rendering
description: "Enable the rendering customization of the Kendo UI for Vue AutoComplete in Vue projects."
slug: customrendering_autocomplete
position: 6
---

# Custom Rendering

The AutoComplete provides options for customizing the way it renders its elements.

The AutoComplete utilizes custom renderers which enable you to moderate the content of its:
* [Suggestion list items](#toc-items)
* [Header and footer elements](#toc-headers-and-footers)
* [Suggestion list when no data is available](#toc-no-data)

## Items

To customize the content of each suggestion list item, use the [`itemRender`]({% slug api_dropdowns_autocompleteprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the AutoComplete and customize the list elements.

{% meta height:340 %}
{% embed_file autocomplete/item-render/main.vue preview %}
{% embed_file autocomplete/item-render/main.js %}
{% embed_file autocomplete/item-render/ItemRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the items popup of the AutoComplete, use the [`header`]({% slug api_dropdowns_autocompleteprops %}#toc-header) and [`footer`]({% slug api_dropdowns_autocompleteprops %}#toc-footer) props.

{% meta height:400 %}
{% embed_file autocomplete/header-footer/main.vue preview %}
{% embed_file autocomplete/header-footer/main.js %}
{% embed_file autocomplete/header-footer/HeaderRender.vue %}
{% embed_file autocomplete/header-footer/FooterRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## No Data

To customize the content of the suggestion list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_autocompleteprops %}#toc-listnodatarender) prop.

{% meta height:380 %}
{% embed_file autocomplete/nodata-render/main.vue preview %}
{% embed_file autocomplete/nodata-render/main.js %}
{% embed_file autocomplete/nodata-render/NoDataRender.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
