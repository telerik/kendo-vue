---
title: Filter Rows
description: "Get started with the Kendo UI for Vue Native TreeList that makes filtering only of those data records which meet specified criteria possible."
slug: filtering_treelist
position: 1
---

# Filtering

The Kendo UI for Vue Native TreeList enables you to display only those TreeList records which meet specified criteria.

## Getting Started

To enable filtering:

1. Set the [`filter`]({% slug api_treelist_treelistprops %}#toc-filter) prop of the TreeList. The filtering conditions are declared as [`FilterDescriptors`]({% slug api_kendo-data-query_filterdescriptor %}).
1. Handle the [`onFilterChange`]({% slug api_treelist_treelistprops %}#toc-onfilterchange) or the [`onDataStateChange`]({% slug api_treelist_treelistprops %}#toc-ondatastatechange) event of the TreeList, and filter the data manually or by using the [`filterBy`]({% slug api_treelist_filterby %}) function.
1. Pass the component which will be responsible for the filtering of the column by using the [`filter`]({% slug api_treelist_treelistcolumnprops %}#toc-filter) prop.

Each consecutive filter is added to the previous ones and reduces the subset of data.

## Filter Rows

By default, when filtering is enabled, the TreeList renders a filter row in its header. Based on the type of the filter component which is set in the `filter` prop of the columns, the filter row displays components in each column header where the user can filter string, numeric, boolean, or date inputs.

{% meta height:580 %}
{% embed_file filtering-basic/main.vue preview %}
{% embed_file shared/data.js %}
{% endmeta %}


## Suggested Links

* [FilterDescriptors]({% slug api_kendo-data-query_filterdescriptor %})
* [onDataStateChange]({% slug api_treelist_treelistprops %}#toc-ondatastatechange)
* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
