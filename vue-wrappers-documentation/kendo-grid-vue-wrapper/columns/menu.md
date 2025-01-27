---
title: Column Menu
page_title: Vue Grid Wrapper - Column Menu - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure a column menu."
slug: columnmenu_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/columns/column-menu/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/columns/column-menu"></WrapperBanner></div>

# Column Menu

You can trigger implement the triggering of column operations by rendering a column menu.

To enable the built-in column menu of the Kendo UI Grid wrapper for Vue, use the `:columnMenu="true"` configuration. As a result, an option to display a column menu will be rendered in the column headers and when activated, the column menu allows you to sort, filter, or change the visibility of the column. The column menu also detects whether a column operation is disabled through the column definition and excludes the corresponding UI from its rendering as demonstrated in the following example for the **Category** column for which filtering is disabled.

{% meta height:360 %}
{% embed_file grid/columns/column-menu/main.vue preview %}
{% embed_file grid/columns/column-menu/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
