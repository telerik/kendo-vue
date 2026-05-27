---
title: Paging
description: "Get started with the paging functionality of the Kendo UI for Vue Native TreeList and learn how to split content into pages."
slug: paging_treelist
position: 90
---

# Kendo UI for Vue Native TreeList Paging Functionality

The data of the Kendo UI for Vue Native TreeList can be split into different pages.

## Getting Started

To configure the paging functionality:

1. Set the [`pageable`]({% slug api_treelist_treelistprops %}#toc-pageable) property to `true`.
1. Set the [`skip`]({% slug api_treelist_treelistprops %}#toc-skip) property.
1. Set the [`take`]({% slug api_treelist_treelistprops %}#toc-take) property.
1. Handle the [`onPageChange`]({% slug api_treelist_treelistprops %}#toc-onpagechange) event and in its event handler, update the `skip` and `take` values.

The following example demonstrates a TreeList with a paging configuration.

{% meta height:570 %}
{% embed_file paging/main.vue preview %}
{% embed_file paging/main.js %}
{% embed_file shared/treelist-data.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
