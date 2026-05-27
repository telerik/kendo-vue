---
title: Virtual Scrolling
description: "Get started with the Kendo UI for Vue Native TreeList and provide an alternative to paging by setting its virtual scrolling mode."
slug: virtualscrolling_treelist
position: 100
---

# Native TreeList Virtual Scrolling

The Kendo UI for Vue `Native TreeList` provides Virtual scrolling as an alternative to the [data paging]({% slug paging_treelist %}).

The Virtualization functionality is suitable for scenarios with a big number of data items. When working in a Virtualization mode, the TreeList renders only part the component's data, based on the scroller position.

## Getting Started

To use the TreeList with virtual scrolling you need to set the following configurations:

- Set the [`scrollable`]({% slug api_treelist_treelistprops %}#toc-scrollable) prop to `virtual`.
- Set the TreeList height in pixels through its [`style`]({% slug api_treelist_treelistprops %}#toc-wrapperstyle) prop.
- Set the [`rowHeight`]({% slug api_treelist_treelistprops %}#toc-rowheight) prop.

{% meta height:500 %}
{% embed_file virtual-scroll/main.vue preview %}
{% embed_file virtual-scroll/main.js %}
{% embed_file shared/treelist-data.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Index of the TreeList]({% slug api_treelist %})
