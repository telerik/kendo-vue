---
title: Aggregates
page_title: Vue Grid - Aggregates - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI enabling you to visualize aggregates for grouped data in the respective column group footer of the component."
slug: groupingaggregates_grid
position: 2
---

# Aggregates

The Kendo UI for Vue Native Data Grid enables you to visualize the aggregates for the grouped data in the respective column group footer of the component.

To group the table data of the Grid, use its [`group`]({% slug api_grid_gridprops %}#toc-group) and [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) options.

To integrate the available aggregates in the Grid:

1. Select the desired [`GridGroupableSettings`]({% slug api_grid_gridgroupablesettings %}) so that the Grid renders footers.
1. In the [`cellRender`]({% slug api_grid_gridprops %}#toc-cellrender) method of the Grid, specify the way for displaying the aggregates.

{% meta height:660 %}
{% embed_file grouping/aggregates/main.vue preview %}
{% embed_file grouping/aggregates/main.js %}
{% embed_file grouping/aggregates/CellComponent.vue %}
{% endmeta %}

## Suggested Links

* [Overview of Grouping]({% slug groupingbasics_grid %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [Grid Custom Cell template with Grouping and Selection]({% slug grid-custom-cell-grouping-and-selection %})
* [Grid with Custom Template, Row Details and Grouping]({% slug grid-details-template-with-grouping %})
