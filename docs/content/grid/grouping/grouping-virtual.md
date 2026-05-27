---
title: Virtualization with Grouping
page_title: Vue Grid - Virtualization with Grouping - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI and learn how to virtualize grouped data."
slug: groupingvirtualization_grid
position: 3
---

# Using Virtualization with Grouping

You can use virtual scrolling in combination with grouped data.

1. Set the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) and [`group`]({% slug api_grid_gridprops %}#toc-group) options of the Grid.
1. Set the [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) option to `virtual`.
1. Handle the emitted [`onDatastatechange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. The `onDatastatechange` event fires upon user interaction with the scrolling or changing the groups, and then processes the data and returns the data to the Grid.

To programmatically implement the processing of the data, either:

-   Send a request to the server to execute the grouping on the server side, or
-   Use the `process` method of the [`DataQuery`]({% slug overview_dataquery %}) library which automatically processes the data.

The Grid expects the grouped data to be a collection of `GroupResults`.

{% meta height:580 %}
{% embed_file grouping-virtual/main.vue preview %}
{% embed_file grouping-virtual/main.js %}
{% endmeta %}

## Suggested Links

* [Overview of Grouping]({% slug groupingbasics_grid %})
* [API Reference of the Grid Component]({% slug api_grid_gridprops %})
