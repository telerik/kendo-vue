---
title: Sorting
description: "Get started with the sorting functionality of the Kendo UI for Vue Native TreeList and learn how to sort its data by single or multiple columns."
slug: sorting_treelist
position: 40
---

# Native TreeList Sorting

The Kendo UI for Vue `Native TreeList` enables you to sort its data by a single or multiple columns.

## Getting Started

To enable sorting:

1. Set the [`sortable`]({% slug api_treelist_treelistprops %}#toc-sortable) option of the TreeList.
1. Set the [`field`]({% slug api_treelist_treelistcellprops %}#toc-field) option of the TreeList column.
1. Utilize the [`sort`]({% slug api_treelist_treelistprops %}#toc-sort) option to apply the sorting styles and buttons to the affected columns.
1. When [`sortable`]({% slug api_treelist_treelistprops %}#toc-sortable) is configured and the user tries to sort a column, the [`onSortChange`]({% slug api_treelist_treelistprops %}#toc-onsortchange) event is emitted. Handle the `onSortChange` event where you have the option to sort the data programmatically, to make a request to the server for server sorting, or to use the [`orderBy`]({% slug api_treelist_orderby %}) function which automatically processes the data.

The following example demonstrates the minimum required configuration for sorting the TreeList records.

{% meta height:580 %}
{% embed_file sorting-basic/main.vue preview %}
{% embed_file sorting-basic/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Customizing the Sorting

The default sorting functionality of the TreeList allows you to upgrade it with the following features:
1. Unsort the columns - To enable the unsorting of columns, set the `sortable.allowUnsort` property to `true`. With this configuration, when you click on a column header multiple times, one of the columns states will be an "unsorted" column.
2. Sort the records by multiple columns - To enable the multiple columns sorting, set the `sortable.mode` option to `multiple` (the property accepts a `single` or `multiple` value) .

{% meta height:700 %}
{% embed_file sorting-customization/main.vue preview %}
{% embed_file sorting-customization/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Suggested Links

* [Data Query Overview]({% slug overview_dataquery %})
* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Index of the TreeList]({% slug api_treelist %})
