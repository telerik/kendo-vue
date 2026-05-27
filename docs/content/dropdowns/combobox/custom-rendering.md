---
title: Custom Renderings
description: "Enable the rendering customization of the Kendo UI for Vue ComboBox in Vue projects."
slug: customrendering_combobox
position: 70
---

# Custom Rendering

The ComboBox provides options for customizing the way it renders its elements.

The ComboBox utilizes custom renderers which enable you to moderate the content of its:
* [Suggestion list items](#toc-items)
* [Header and footer elements](#toc-headers-and-footers)
* [Suggestion list when no data is available](#toc-no-data)

## Items

To customize the content of each suggestion list item, use the [`itemRender`]({% slug api_dropdowns_comboboxprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the ComboBox and customize the list elements.

{% meta height:340 %}
{% embed_file combobox/item-render/main.vue preview %}
{% embed_file combobox/item-render/main.js %}
{% embed_file combobox/item-render/ItemRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the items popup of the ComboBox, use the [`header`]({% slug api_dropdowns_comboboxprops %}#toc-header) and [`footer`]({% slug api_dropdowns_comboboxprops %}#toc-footer) props.

{% meta height:380 %}
{% embed_file combobox/header-footer/main.vue preview %}
{% embed_file combobox/header-footer/main.js %}
{% embed_file combobox/header-footer/FooterRender.vue %}
{% embed_file combobox/header-footer/HeaderRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## No Data

To customize the content of the suggestion list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_comboboxprops %}#toc-listnodatarender) prop.

{% meta height:380 %}
{% embed_file combobox/nodata-render/main.vue preview %}
{% embed_file combobox/nodata-render/main.js %}
{% embed_file combobox/nodata-render/NoDataRender.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
