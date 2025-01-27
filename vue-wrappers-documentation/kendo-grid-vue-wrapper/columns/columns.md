---
title: Columns Basics
page_title: Vue Grid Wrapper - Columns Basics - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure the behavior of its columns."
slug: columns_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid"></WrapperBanner></div>

# Columns Basics

The Kendo UI Grid wrapper for Vue supports options for configuring the behavior of its columns.

> To configure the column behavior of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug resizing_columns_grid %}).

To manage the columns of the Grid:
* [Use the `kendo-grid-column` component](#toc-using-the-kendo-grid-columns-component)
* [Configure an object in the Vue data](#toc-using-the-data-vue-object)

For more information on the available properties, refer to the [`grid.columns`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid#configuration-columns) configuration.

## Using the kendo-grid-columns Component

The following example demonstrates how to set the inline initialization of the `kendo-grid-columns` component.

{% meta height:360 %}
{% embed_file grid/columns/basic/main.vue preview %}
{% embed_file grid/columns/basic/main.js %}
{% endmeta %}

## Using the data Vue Object

The following example demonstrates how to use the `data` object to specify the columns of the Kendo UI Data Grid wrapper for Vue.

{% meta height:360 %}
{% embed_file grid/columns/vueobject/main.vue preview %}
{% embed_file grid/columns/vueobject/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Columns in the Native Vue Grid by Kendo UI]({% slug resizing_columns_grid %})
