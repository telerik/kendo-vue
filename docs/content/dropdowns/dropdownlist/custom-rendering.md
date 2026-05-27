---
title: Custom Rendering
description: "Enable the rendering customization of the KendoVue DropDownList in Vue projects."
slug: customrendering_dropdownlist
position: 60
---

# Custom Rendering

The DropDownList provides options for customizing the way it renders its elements.

The DropDownList utilizes custom renderers which enable you to moderate the content of its:
* [Option list items](#toc-items)
* [Option list values](#toc-values)
* [Header and footer elements](#toc-headers-and-footers)
* [Option list when no data is available](#toc-no-data)

## Items

To customize the content of each option list item, use the [`item-render`]({% slug api_dropdowns_dropdownlistprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `item-render` prop of the DropDownList and customize the list elements.

{% meta height:350 %}
{% embed_file dropdownlist/item-render/main.vue preview %}
{% embed_file dropdownlist/item-render/main.js %}
{% embed_file dropdownlist/item-render/ItemRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Values

To customize the element content that holds the selected text, use the [`value-render`]({% slug api_dropdowns_dropdownlistprops %}#toc-valuerender) prop.

{% meta height:350 %}
{% embed_file dropdownlist/value-render/main.vue preview %}
{% embed_file dropdownlist/value-render/main.js %}
{% embed_file dropdownlist/value-render/ValueRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the DropDownList items popup, use the [`header`]({% slug api_dropdowns_dropdownlistprops %}#toc-header) and [`footer`]({% slug api_dropdowns_dropdownlistprops %}#toc-footer) props.

{% meta height:380 %}
{% embed_file dropdownlist/header-footer/main.vue preview %}
{% embed_file dropdownlist/header-footer/main.js %}
{% embed_file dropdownlist/header-footer/HeaderRender.vue %}
{% embed_file dropdownlist/header-footer/FooterRender.vue %}
{% embed_file shared/countries.js %}
{% endmeta %}

## No Data

To customize the content of the option list when no data is present, use the [`list-no-data-render`]({% slug api_dropdowns_dropdownlistprops %}#toc-listnodatarender) prop.

{% meta height:350 %}
{% embed_file dropdownlist/nodata-render/main.vue preview %}
{% embed_file dropdownlist/nodata-render/main.js %}
{% embed_file dropdownlist/nodata-render/NoDataRender.vue %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
