---
title: Custom Rendering
description: "Enable the rendering customization of the Kendo UI for Vue MultiSelectTree in Vue projects."
slug: customrendering_multiselecttree
position: 30
---

# Custom Rendering

The MultiSelectTree provides options for customizing the way it renders its elements.

## Items and Value element

To customize the content of each option list item, use the [`item`]({% slug api_dropdowns_multiselecttreeprops %}#toc-item) prop. To customize the tag elements, use the  [`tag`]({% slug api_dropdowns_multiselecttreeprops %}#toc-tag) prop.

The following example demonstrates how to customize the list and tag elements.


{% meta height:520 %}
{% embed_file multiselecttree/custom-rendering/main.vue preview %}
{% embed_file multiselecttree/custom-rendering/main.js preview %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% embed_file shared/tree-files-data.js %}
{% endmeta %}


## Header and Footer

To customize the content of the header and footer, use the [`header`]({% slug api_dropdowns_multiselecttreeprops %}#toc-header) and [`footer`]({% slug api_dropdowns_multiselecttreeprops %}#toc-footer) prop.


{% meta height:400 %}
{% embed_file multiselecttree/header-footer/main.vue preview %}
{% embed_file multiselecttree/header-footer/main.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% embed_file shared/tree-data.js %}
{% endmeta %}

## No Data

To customize the content of the option list when no data is present, use the [`listNoData`]({% slug api_dropdowns_multiselecttreeprops %}#toc-listnodata) prop.

{% meta height:250 %}
{% embed_file multiselecttree/no-data/main.vue preview %}
{% embed_file multiselecttree/no-data/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
