---
title: Grouping Basics
page_title: Vue Grid Wrapper - Grouping Basics - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to enable grouping to be able to display grouped table data."
slug: grouping_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/grouping/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/grouping"></WrapperBanner></div>


# Grouping Basics

By default, grouping in the Kendo UI Grid wrapper for Vue is disabled and the `:groupable` option is set to `false`.

> To configure the grouping functionality in the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug groupingbasics_grid %}).

To enable grouping, set `:groupable` to `true`. As a result, the header renders a new area which allows the user to drop a column on it and group the data by that column. You can also group the data by multiple columns through dragging a second column onto the grouping header. For more information on grouping, refer to the documentation of the [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/grouping/overview).

{% meta height:400 %}
{% embed_file grid/grouping/basic/main.vue preview %}
{% embed_file grid/grouping/basic/main.js %}
{% endmeta %}

## Suggested Links

* [Grouping of the Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/grouping/overview)
* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Grouping in the Native Vue Grid by Kendo UI]({% slug groupingbasics_grid %})
