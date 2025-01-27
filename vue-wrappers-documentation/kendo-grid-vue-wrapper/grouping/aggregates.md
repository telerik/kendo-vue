---
title: Aggregates
page_title: Vue Grid Wrapper - Aggregates - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure its aggregates functionality."
slug: aggregates_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/grouping/grouping/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/grouping/grouping"></WrapperBanner></div>

# Aggregates

The Kendo UI Grid wrapper for Vue enables you to display aggregate calculations at the bottom of its groups or columns.  

> To configure the aggregate grouping functionality in the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug groupingaggregates_grid %}).

To aggregate the calculations in the Kendo UI Data Grid wrapper for Vue:
1. Specify the name of the pertinent aggregate function by setting `columns` to `aggregates`.
1. Set the `group` and `aggregate` fields of the data source instance.

{% meta height:660 %}
{% embed_file grid/grouping/aggregates/main.vue preview %}
{% embed_file grid/grouping/aggregates/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Aggregates in the Native Vue Grid by Kendo UI]({% slug groupingaggregates_grid %})
