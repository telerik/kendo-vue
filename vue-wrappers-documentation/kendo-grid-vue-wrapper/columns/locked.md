---
title: Locked Columns
page_title: Vue Grid Wrapper - Locked Columns - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure locked column feature."
slug: lockedcolumns_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/columns/locked/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/columns/locked"></WrapperBanner></div>

# Locked Columns

You can display Kendo UI Grid wrapper for Vue with large number of columns on limited viewports and make a small subset of them static while scrolling the rest horizontally to make them visible.

> To implement locked columns in the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug locked_columns_grid %}).

To apply the locked (static or frozen) column feature, set the `locked` property of the corresponding column to `true`. By default, the Kendo UI Data Grid wrapper for Vue renders its locked columns on its left side.

The following example demonstrates how to implement the **OrderID** and **ShipName** columns as locked.

{% meta height:660 %}
{% embed_file grid/columns/locked/main.vue preview %}
{% embed_file grid/columns/locked/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Locked Columns in the Native Vue Grid by Kendo UI]({% slug locked_columns_grid %})
