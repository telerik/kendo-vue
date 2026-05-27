---
title: Scroll Modes
page_title: Vue Grid - Scroll Modes - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI and learn how to configure its scrollable, non-scrollable, and virtual scrolling scroll modes."
slug: scrollmmodes_grid
position: 400
---

# Scroll Modes

The native Vue Grid by Kendo UI enables you to configure its layout modes.

You can set the following modes to the Grid:
* [Scrollable](#toc-scrollable)
* [Non-scrollable](#toc-non-scrollable)
* [Virtual scrolling](#toc-virtual-scrolling)

## Scrollable

When scrolling is enabled, the content of the Grid is rendered as tables&mdash;one for the header area, another one for the scrollable data area, and a third one for the footer area. This behavior ensures that the header and footer areas of the Grid are always visible while the user scrolls vertically.
The scrollable mode is enabled by default. To configure it, use the [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) option, which also requires you to set the height of the Grid through its [`style`]({% slug api_grid_gridprops %}#toc-style) property.

### Conditional Scrolling

By configuring the `style.maxHeight` property, you can set the Grid in scrollable mode only when its rendered content exceeds certain height limits. If the content does not exceed the set maximum height, the height of the Grid will be the same as the height of its content.

## Non-Scrollable

When the non-scrollable mode is enabled, the Grid renders its data as a single table and the scrollbar is not displayed. To configure the non-scrollable mode, set [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) to `none`.

## Virtual Scrolling

Virtual scrolling provides an alternative to paging. While the user is scrolling the table, the Grid requests and displays only the visible pages.
### Setup

To enable virtualization, simply set the Grid's `height` using the [`style`]({% slug api_grid_gridprops %}#toc-style) property.

Optionally, you can further refine and customize virtualization behavior in the Grid by configuring the following props:

-   [`skip`]({% slug api_grid_gridprops %}#toc-skip) &mdash; Specifies the number of records to skip.
-   [`take`]({% slug api_grid_gridprops %}#toc-take) &mdash; Defines the number of records to display.
-   [`total`]({% slug api_grid_gridprops %}#toc-total) &mdash; Sets the total number of records.
-   [`pageSize`]({% slug api_grid_gridprops %}#toc-pagesize) &mdash; Determines the number of records per page.
-   [`rowHeight`]({% slug api_grid_gridprops %}#toc-rowheight) &mdash; Sets the height of each row.
-   [`detailRowHeight`]({% slug api_grid_gridprops %}#toc-detailrowheight) &mdash; Sets the height of each detail row.

{% meta height:500 %}
{% embed_file virtual-scrolling-local/main.vue preview %}
{% embed_file virtual-scrolling-local/main.js %}
{% endmeta %}

## Using Virtualization with Grouping

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

## Using Virtualization with Detail Rows

You can also use [DOM virtualization](#getting-started) in combination with [detail rows]({% slug detailrow_grid %}).

1. Set the [`detail`]({% slug api_grid_gridprops %}#toc-detail) to the detail component.
1. Set the [`detailExpand`](slug:api_grid_gridprops#detailexpand) prop to handle the expand state of the Grid internally.
1. Set the [`onDetailexpandchange`]({% slug api_grid_gridprops %}#toc-ondetailexpandchange)

{% meta height:470 %}
{% embed_file detail-rows-virtualization/main.vue preview %}
{% embed_file detail-rows-virtualization/main.js %}
{% endmeta %}

## Using Virtualization with Responsive Columns

The virtual scrolling functionality requires that all Grid rows have an equal, predefined height. However, you can still keep virtual scrolling and use responsive columns which have different cell templates based on the column width.

{% meta height:470 %}
{% embed_file responsive-design/column-virtualization/main.vue preview %}
{% embed_file responsive-design/column-virtualization/main.js %}
{% endmeta %}

## Debouncing pageChange Events

When configured for virtualization, the Grid fires the [`onPageChange`]({% slug api_grid_gridprops %}#toc-onpagechange) event as often as possible. This behavior allows for a smoother scrolling experience when the data is available in memory.

If the data is requested from a remote service, it is advisable to debounce or otherwise limit the page changes.

{% meta height:510 %}
{% embed_file virtual-scrolling-remote/main.vue preview %}
{% embed_file virtual-scrolling-remote/main.js %}
{% endmeta %}

### Infinite Scrolling

After the user scrolls to the end of the page, the Grid enables you to load more records by appending additional pages of data on demand. To implement the infinite scrolling feature, use the [`onScroll`]({% slug api_grid_gridprops %}#toc-onscroll) event and add more data once the user is near to the bottom of the Grid.

The following example demonstrates how to dynamically add data to the Grid while the user is scrolling.

{% meta height:520 %}
{% embed_file scroll-modes/infinite/main.vue preview %}
{% embed_file scroll-modes/infinite/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
