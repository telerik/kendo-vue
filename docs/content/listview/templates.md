---
title: Templates
description: "Get started with the paging functionality of the Kendo UI for Vue Native ListView and learn how to split content into pages."
slug: templates_listview
position: 40
---

# ListView Templates

The content of the ListView is defined and customized using separate templates for its `data items`, `header` and `footer`. By combining the 

## Item Template

To provide a template for each item that will be rendered in the ListView, nest a `slot` template inside the definition of the `ListView` component and pass the name of the `item` template to the [item prop](slug:api_listview_listviewprops#toc-item).

{% meta height:670 %}
{% embed_file item-template/main.vue preview %}
{% embed_file item-template/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}



## Header Template

To render a header section above the items of the ListView, nest a `slot` template inside the definition of the `ListView` component and pass the name of the `header` template to the [header prop](slug:api_listview_listviewprops#toc-header).

{% meta height:660 %}
{% embed_file header-template/main.vue preview %}
{% embed_file header-template/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}


## Footer Template

To render a footer section below the items of the ListView, nest a `slot` template inside the definition of the `ListView` component and pass the name of the `footer` template to the [footer prop](slug:api_listview_listviewprops#toc-footer).

{% meta height:660 %}
{% embed_file footer-template/main.vue preview %}
{% embed_file footer-template/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

## Suggested Links

* [API Reference of the ListView]({% slug api_listview_listviewprops %})
