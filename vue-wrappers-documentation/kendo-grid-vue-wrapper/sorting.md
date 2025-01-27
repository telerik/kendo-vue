---
title: Sorting
page_title: Vue Grid Wrapper - Sorting - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to enable sorting to be able to sort single and multiple data-bound columns."
slug: sorting_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/sorting/"
position: 6
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/sorting"></WrapperBanner></div>

# Sorting

Sorting is a function that you can push to the server to increase the performance of the Kendo UI Grid wrapper for Vue.

> To enable the sorting functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug sorting_grid %}).

To implement sorting, use the DataSource component and set the `serverSorting` option on the `dataSource` instance to `true`. If you delegate the sorting to the server, you will receive the default `orderBy` parameter. The `orderBy` field contains the field name of the column in the dataset by which the data is sorted.

By default, the sorting of Kendo UI Data Grid wrapper for Vue data is disabled. The Grid supports the following sorting formats:
* Single-column sorting&mdash;To enable it, set the `sortable` option of the Grid to `true`.
* Multi-column sorting&mdash;To enable it, set the `mode` option to `multiple`.

The following example demonstrates how to implement a Grid with its multiple-column sorting enabled.

{% meta height:660 %}
{% embed_file grid/sorting/main.vue preview %}
{% embed_file grid/sorting/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Sorting in the Native Vue Grid by Kendo UI]({% slug sorting_grid %})
