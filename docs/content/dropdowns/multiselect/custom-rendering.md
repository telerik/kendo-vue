---
title: Custom Rendering
description: "Enable the rendering customization of the Kendo UI for Vue Native MultiSelect in Vue projects."
slug: customrendering_multiselect
position: 70
---

# Custom Rendering

The Kendo UI for Vue MultiSelect provides options for customizing the way it renders its elements.

The MultiSelect utilizes custom renderers which enable you to moderate the content of its:
* [Option list items](#toc-items)
* [Tags](#toc-tags)
* [Header and footer elements](#toc-headers-and-footers)
* [Option list when no data is available](#toc-no-data)

## Items

To customize the content of each suggestion list item, use the [`itemRender`]({% slug api_dropdowns_multiselectprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the MultiSelect and customize the list elements.

{% meta height:350 %}
{% embed_file multiselect/item-render/main.vue preview %}
{% embed_file multiselect/item-render/ItemRender.vue %}
{% embed_file multiselect/item-render/main.js %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Tags

To customize the content of each tag, use the [`tagRender`]({% slug api_dropdowns_multiselectprops %}#toc-tagrender) prop.

The following example demonstrates how to set the `tagRender` prop of the MultiSelect and customize the tags elements.

{% meta height:350 %}
{% embed_file multiselect/tags/main.vue preview %}
{% embed_file multiselect/tags/main.js %}
{% embed_file multiselect/tags/styles.css %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the items popup of the MultiSelect, use the [`header`]({% slug api_dropdowns_multiselectprops %}#toc-header) and [`footer`]({% slug api_dropdowns_multiselectprops %}#toc-footer) props.

{% meta height:350 %}
{% embed_file multiselect/header-footer/main.vue preview %}
{% embed_file multiselect/header-footer/HeaderRender.vue %}
{% embed_file multiselect/header-footer/FooterRender.vue %}
{% embed_file multiselect/header-footer/main.js %}
{% embed_file shared/countries.js %}
{% endmeta %}

## No Data

To customize the content of the suggestion list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_multiselectprops %}#toc-listnodatarender) prop.

{% meta height:350 %}
{% embed_file multiselect/nodata-render/main.vue preview %}
{% embed_file multiselect/nodata-render/NoDataRender.vue %}
{% embed_file multiselect/nodata-render/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
